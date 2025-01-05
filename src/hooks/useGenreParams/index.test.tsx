import { useRouter, useSearchParams } from "next/navigation";
import { renderHook, act } from "@testing-library/react";
import { useGenreParams } from "./";

jest.mock("next/navigation");

describe("useGenreParams", () => {
  const mockPush = jest.fn();
  const mockGet = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: mockGet,
      toString: jest.fn().mockReturnValue(""),
    });
    jest.clearAllMocks();
  });

  it("should return the initial genre when no genre is in the URL", () => {
    mockGet.mockReturnValue(null);

    const { result } = renderHook(() => useGenreParams("defaultGenre"));

    expect(result.current.currentGenre).toBe("defaultGenre");
  });

  it("should return the genre from the URL if present", () => {
    mockGet.mockReturnValue("action");

    const { result } = renderHook(() => useGenreParams("defaultGenre"));

    expect(result.current.currentGenre).toBe("action");
  });

  it("should set a new genre in the URL", () => {
    const { result } = renderHook(() => useGenreParams("defaultGenre"));

    act(() => {
      result.current.setGenreInURL("strategy");
    });

    expect(mockPush).toHaveBeenCalledWith("/?genre=strategy");
  });

  it("should remove the genre from the URL if set to an empty string", () => {
    const { result } = renderHook(() => useGenreParams("defaultGenre"));

    act(() => {
      result.current.setGenreInURL("");
    });

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("should set the initial genre in the URL on mount if pathname is '/'", () => {
    const { result } = renderHook(() => useGenreParams("defaultGenre"));

    expect(mockPush).toHaveBeenCalledWith("/?genre=defaultGenre");
  });
});
