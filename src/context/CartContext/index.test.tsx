import { act, renderHook } from "@testing-library/react";
import { Game } from "@/types/games";
import { CartProvider, useCartContext } from "./";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  description: "A test game description",
  genre: "Action",
  price: 59.99,
  image: "/test-image.jpg",
  isNew: true,
};

const mockGame2: Game = {
  id: "2",
  name: "Test Game 2",
  description: "Another test game description",
  genre: "Adventure",
  price: 39.99,
  image: "/test-image2.jpg",
  isNew: false,
};

describe("CartProvider and useCartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides an initial empty cart", () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    expect(result.current.cart).toEqual([]);
    expect(result.current.totalPrice).toBe("$0.00");
    expect(result.current.totalQuantity).toBe(0);
  });

  it("adds an item to the cart and updates localStorage", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
    });

    expect(result.current.cart).toEqual([mockGame]);
    expect(result.current.totalPrice).toBe("$59.99");
    expect(result.current.totalQuantity).toBe(1);
    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([
      mockGame,
    ]);
  });

  it("removes an item from the cart and updates localStorage", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
      result.current.removeFromCart(mockGame);
    });

    expect(result.current.cart).toEqual([]);
    expect(result.current.totalPrice).toBe("$0.00");
    expect(result.current.totalQuantity).toBe(0);
    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([]);
  });

  it("does not add duplicate items", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
      result.current.addToCart(mockGame);
    });

    expect(result.current.cart).toEqual([mockGame]);
    expect(result.current.totalQuantity).toBe(1);
  });

  it("clears the cart", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
      result.current.addToCart(mockGame2);
      result.current.clearCart();
    });

    expect(result.current.cart).toEqual([]);
    expect(result.current.totalPrice).toBe("$0.00");
    expect(result.current.totalQuantity).toBe(0);
    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([]);
  });

  it("checks if an item is in the cart", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
    });

    expect(result.current.isInCart(mockGame.id)).toBe(true);
    expect(result.current.isInCart(mockGame2.id)).toBe(false);
  });

  it("loads the cart from localStorage on initialization", () => {
    localStorage.setItem("cart", JSON.stringify([mockGame]));

    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    expect(result.current.cart).toEqual([mockGame]);
    expect(result.current.totalPrice).toBe("$59.99");
    expect(result.current.totalQuantity).toBe(1);
  });

  it("updates localStorage when the cart changes", async () => {
    const { result } = renderHook(() => useCartContext(), {
      wrapper: CartProvider,
    });

    await act(() => {
      result.current.addToCart(mockGame);
    });

    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([
      mockGame,
    ]);

    await act(() => {
      result.current.removeFromCart(mockGame);
    });

    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([]);
  });
});
