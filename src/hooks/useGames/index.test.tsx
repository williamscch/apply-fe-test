import { renderHook, act } from "@testing-library/react";
import { useGames } from "./";
import { fetchGames } from "@/services/games";
import { Game } from "@/types/games";
import { allGames } from "@/mocks/games";

jest.mock("@/services/games", () => ({
  fetchGames: jest.fn(),
}));

const mockGames: Game[] = allGames;

describe("useGames Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("initializes with the correct default state", () => {
    const { result } = renderHook(() => useGames());
    expect(result.current.games).toEqual([]);
    expect(result.current.genre).toBe("");
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.totalPages).toBe(0);
    expect(result.current.loadMoreEnabled).toBe(false);
  });

  it("fetches games on genre change", async () => {
    (fetchGames as jest.Mock).mockImplementation(
      (genre: string, page: number) => {
        const filteredGames = mockGames.filter((game) => game.genre === genre);
        return Promise.resolve({
          games: filteredGames,
          totalPages: 1,
        });
      }
    );

    const { result } = renderHook(() => useGames([], "", 1));

    await act(async () => {
      result.current.setGenre("Action");
    });

    expect(fetchGames).toHaveBeenCalledWith("Action", 1);
    const filteredGames = mockGames.filter((game) => game.genre === "Action");
    expect(result.current.games).toEqual(filteredGames);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("handles errors during fetching", async () => {
    (fetchGames as jest.Mock).mockRejectedValue(new Error("Fetch failed"));

    const { result } = renderHook(() => useGames([], "Action", 1));

    await act(async () => {
      result.current.setGenre("Adventure");
    });

    expect(fetchGames).toHaveBeenCalledWith("Adventure", 1);
    expect(result.current.error).toBe("Fetch failed");
    expect(result.current.loading).toBe(false);
    expect(result.current.games).toEqual([]);
  });

  it("prevents loading more games when loadMoreEnabled is false", async () => {
    (fetchGames as jest.Mock).mockResolvedValue({
      games: mockGames,
      totalPages: 1,
    });

    const { result } = renderHook(() => useGames(mockGames, "Action", 1));

    await act(async () => {
      result.current.handleLoadMore();
    });

    expect(fetchGames).toHaveBeenCalledTimes(0);
    expect(result.current.games).toEqual(mockGames);
  });

  it("updates games when a new genre is set", async () => {
    (fetchGames as jest.Mock).mockResolvedValue({
      games: mockGames.filter((game) => game.genre === "Adventure"),
      totalPages: 1,
    });

    const { result } = renderHook(() => useGames(mockGames, "Action", 2));

    await act(async () => {
      result.current.setGenre("Adventure");
    });

    expect(fetchGames).toHaveBeenCalledWith("Adventure", 1);
    expect(result.current.games).toEqual(
      mockGames.filter((game) => game.genre === "Adventure")
    );
  });
});
