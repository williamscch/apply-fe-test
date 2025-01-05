import { render, screen, fireEvent } from "@testing-library/react";
import CatalogTemplate from "./";

jest.mock("@/components/organisms/CatalogHeader", () => ({
  __esModule: true,
  default: ({ title, currentGenre, setGenre }: any) => (
    <div data-testid="catalog-header">
      <h1>{title}</h1>
      <p>Current Genre: {currentGenre}</p>
      <button onClick={() => setGenre("Action")}>Change Genre</button>
    </div>
  ),
}));

jest.mock("@/components/organisms/CatalogGames", () => ({
  __esModule: true,
  default: ({ games, loading, loadMoreButton }: any) => (
    <div data-testid="catalog-games">
      {loading ? (
        <p>Loading...</p>
      ) : (
        games.map((game: any) => <p key={game.id}>{game.name}</p>)
      )}
      {loadMoreButton?.render && (
        <button onClick={loadMoreButton.onClick}>Load More</button>
      )}
    </div>
  ),
}));

describe("CatalogTemplate Component", () => {
  const mockOnGenreChange = jest.fn();
  const mockOnLoadMore = jest.fn();

  const mockGames = [
    {
      id: "1",
      name: "Game 1",
      genre: "Action",
      price: 59.99,
      description: "Test description",
      image: "/test/1/image.png",
      isNew: false,
    },
    {
      id: "2",
      name: "Game 2",
      genre: "RPG",
      price: 39.99,
      description: "Test description",
      image: "/test/2/image.png",
      isNew: false,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the CatalogTemplate container", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={false}
        loadMoreEnabled={false}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const section = screen.getByLabelText("catalog-template");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("flex flex-col gap-8 md:gap-12");
  });

  it("renders CatalogHeader with correct props", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={false}
        loadMoreEnabled={false}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const header = screen.getByTestId("catalog-header");
    expect(header).toBeInTheDocument();
    expect(screen.getByText("Game Catalog")).toBeInTheDocument();
    expect(screen.getByText("Current Genre: Action")).toBeInTheDocument();
  });

  it("renders CatalogGames with correct props", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={false}
        loadMoreEnabled={true}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const gamesSection = screen.getByTestId("catalog-games");
    expect(gamesSection).toBeInTheDocument();
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
    expect(screen.getByText("Load More")).toBeInTheDocument();
  });

  it("calls onGenreChange when genre is changed", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={false}
        loadMoreEnabled={false}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const changeGenreButton = screen.getByText("Change Genre");
    fireEvent.click(changeGenreButton);

    expect(mockOnGenreChange).toHaveBeenCalledWith("Action");
  });

  it("calls onLoadMore when 'Load More' is clicked", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={false}
        loadMoreEnabled={true}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const loadMoreButton = screen.getByText("Load More");
    fireEvent.click(loadMoreButton);

    expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
  });

  it("renders loading state in CatalogGames", () => {
    render(
      <CatalogTemplate
        pageTitle="Game Catalog"
        games={mockGames}
        currentGenre="Action"
        loading={true}
        loadMoreEnabled={false}
        onGenreChange={mockOnGenreChange}
        onLoadMore={mockOnLoadMore}
      />
    );

    const gamesSection = screen.getByTestId("catalog-games");
    expect(gamesSection).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
