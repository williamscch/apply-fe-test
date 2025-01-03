"use client";

import { Game } from "@/types/games";
import { formatPrice } from "@/utils/formatPrice";
import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";

const initialCartState: Game[] = [];

type CartAction =
  | { type: "ADD_ITEM"; payload: Game }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

function cartReducer(state: Game[], action: CartAction): Game[] {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

const CartContext = createContext<{
  cart: Game[];
  totalPrice: string;
  totalQuantity: number;
  addToCart: (game: Game) => void;
  removeFromCart: (game: Game) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}>({
  cart: initialCartState,
  totalPrice: "0.00",
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  isInCart: () => false,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : initialCartState;
    }
    return initialCartState;
  });

  const totalPrice = useMemo(
    () => formatPrice(cart.reduce((acc, item) => acc + item.price, 0)),
    [cart]
  );
  const totalQuantity = useMemo(() => cart.length, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game: Game) => {
    dispatch({ type: "ADD_ITEM", payload: game });
  };

  const removeFromCart = (game: Game) => {
    dispatch({ type: "REMOVE_ITEM", payload: game.id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const isInCart = (id: string) => cart.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
