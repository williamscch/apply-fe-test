import { useRouter } from "next/navigation";
import { render, screen, fireEvent } from "@testing-library/react";
import { useCartContext } from "@/context/CartContext";
import CartSummary from ".";

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("CartSummary Component", () => {
  const mockRouterPush = jest.fn();
  const mockClearCart = jest.fn();
  const mockCart = [
    { id: "1", name: "Game 1", price: 59.99 },
    { id: "2", name: "Game 2", price: 39.99 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useCartContext as jest.Mock).mockReturnValue({
      cart: mockCart,
      totalPrice: "$99.98",
      totalQuantity: 2,
      clearCart: mockClearCart,
    });
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });
  });

  it("renders the order summary correctly when the cart has items", () => {
    render(<CartSummary />);

    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("2 Items")).toBeInTheDocument();
    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("$99.98")).toBeInTheDocument();

    mockCart.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
      expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
    });
  });

  it("does not render anything when the cart is empty", () => {
    (useCartContext as jest.Mock).mockReturnValue({
      cart: [],
      totalPrice: "$0.00",
      totalQuantity: 0,
      clearCart: mockClearCart,
    });

    render(<CartSummary />);

    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
  });

  it("calls clearCart and navigates to home when checkout is confirmed", () => {
    global.confirm = jest.fn(() => true);

    render(<CartSummary />);

    const checkoutButton = screen.getByText("Checkout");
    fireEvent.click(checkoutButton);

    expect(global.confirm).toHaveBeenCalledWith("Checkout 2 items for $99.98?");
    expect(mockClearCart).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith("/");
  });

  it("does not call clearCart or navigate if checkout is cancelled", () => {
    global.confirm = jest.fn(() => false);

    render(<CartSummary />);

    const checkoutButton = screen.getByText("Checkout");
    fireEvent.click(checkoutButton);

    expect(global.confirm).toHaveBeenCalledWith("Checkout 2 items for $99.98?");
    expect(mockClearCart).not.toHaveBeenCalled();
    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it("renders the correct structure for the order summary", () => {
    render(<CartSummary />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockCart.length);
  });
});
