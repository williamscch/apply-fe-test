import { render, screen, fireEvent } from "@testing-library/react";
import { useCartContext } from "@/context/CartContext";
import CartGames from "./";

jest.mock("@/components/molecules/GameCard", () => ({
  __esModule: true,
  default: ({ game, button }: any) => (
    <div data-testid="game-card">
      <p>{game.name}</p>
      <button onClick={() => button.onClick(game)}>{button.label}</button>
    </div>
  ),
}));

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

describe("CartGames Component", () => {
  const mockCart = [
    { id: "1", name: "Game 1", genre: "Action", price: 59.99 },
    { id: "2", name: "Game 2", genre: "Adventure", price: 39.99 },
  ];

  const mockRemoveFromCart = jest.fn();

  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue({
      cart: mockCart,
      removeFromCart: mockRemoveFromCart,
    });
  });

  it("renders correctly when the cart has games", () => {
    render(<CartGames />);

    const gameCards = screen.getAllByTestId("game-card");
    expect(gameCards).toHaveLength(mockCart.length);

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });

  it("does not render anything when the cart is empty", () => {
    (useCartContext as jest.Mock).mockReturnValue({
      cart: [],
      removeFromCart: mockRemoveFromCart,
    });

    render(<CartGames />);

    expect(screen.queryByTestId("game-card")).not.toBeInTheDocument();
  });

  it("calls removeFromCart when the Remove button is clicked", () => {
    render(<CartGames />);

    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockCart[0]);
  });

  it("renders GameCard with the correct props", () => {
    render(<CartGames />);

    const gameCard = screen.getByText("Game 1");
    expect(gameCard).toBeInTheDocument();

    const removeButton = screen.getAllByText("Remove");
    expect(removeButton[0]).toBeInTheDocument();
  });

  it("renders the correct structure for the DOM", () => {
    render(<CartGames />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockCart.length);
  });
});
