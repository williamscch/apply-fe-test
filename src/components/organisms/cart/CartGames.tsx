import GameCard from "@/components/molecules/GameCard";
import { useCartContext } from "@/context/CartContext";
import { cn } from "@/utils/cn";

interface CartGamesProps {}

export default function CartGames({}: CartGamesProps) {
  const { cart, removeFromCart } = useCartContext();

  const cartGames = cart?.length > 0;

  return (
    <section>
      <ul className="grid">
        {cartGames &&
          cart.map((game, i) => {
            const isLast = i === cart.length - 1;
            return (
              <li key={game.id}>
                <GameCard
                  template="cart"
                  cardClassName={cn(
                    "rounded-none border-t-0 border-x-0",
                    isLast ? "border-b-0" : ""
                  )}
                  key={game.id}
                  game={game}
                  button={{ label: "Remove", onClick: removeFromCart }}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
