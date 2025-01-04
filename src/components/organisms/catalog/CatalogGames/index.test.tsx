import { render, screen, fireEvent } from "@testing-library/react";
import { useCartContext } from "@/context/CartContext";
import CatalogGames from "./";

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("@/components/molecules/GameCard", () => ({
  __esModule: true,
  default: ({ game, button }: any) => (
    <div data-testid="game-card">
      <p>{game.name}</p>
      <button onClick={button.onClick}>{button.label}</button>
    </div>
  ),
}));

jest.mock("@/components/molecules/Loader", () => ({
  __esModule: true,
  default: () => <div data-testid="loader">Loading...</div>,
}));

describe("CatalogGames Component", () => {
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

  const mockAddToCart = jest.fn();
  const mockRemoveFromCart = jest.fn();
  const mockIsInCart = jest.fn();
  const mockLoadMoreClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCartContext as jest.Mock).mockReturnValue({
      isInCart: mockIsInCart,
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
    });
  });

  it("renders the list of games correctly when games are provided", () => {
    mockIsInCart.mockImplementation((id) => id === "1");

    render(<CatalogGames games={mockGames} />);

    const gameCards = screen.getAllByTestId("game-card");
    expect(gameCards).toHaveLength(mockGames.length);

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();

    expect(screen.getByText("Remove")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });

  it("renders 'No games found' when no games are provided and loading is false", () => {
    render(<CatalogGames games={[]} loading={false} />);

    expect(screen.getByText("No games found")).toBeInTheDocument();
  });

  it("renders the loader when loading is true", () => {
    render(<CatalogGames games={[]} loading={true} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("calls the appropriate cart action when buttons are clicked", () => {
    mockIsInCart.mockImplementation((id) => id === "1");

    render(<CatalogGames games={mockGames} />);

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockGames[0]);

    const addToCartButton = screen.getByText("Add to cart");
    fireEvent.click(addToCartButton);
    expect(mockAddToCart).toHaveBeenCalledWith(mockGames[1]);
  });

  it("renders the 'Load More' button and calls onClick when clicked", () => {
    render(
      <CatalogGames
        games={mockGames}
        loadMoreButton={{
          render: true,
          label: "Load More",
          onClick: mockLoadMoreClick,
        }}
      />
    );

    const loadMoreButton = screen.getByText("Load More");
    expect(loadMoreButton).toBeInTheDocument();

    fireEvent.click(loadMoreButton);
    expect(mockLoadMoreClick).toHaveBeenCalledTimes(1);
  });

  it("does not render the 'Load More' button when render is false", () => {
    render(
      <CatalogGames games={mockGames} loadMoreButton={{ render: false }} />
    );

    expect(screen.queryByText("SEE MORE")).not.toBeInTheDocument();
  });

  it("renders the correct structure for the DOM", () => {
    render(<CatalogGames games={mockGames} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockGames.length);
  });
});
