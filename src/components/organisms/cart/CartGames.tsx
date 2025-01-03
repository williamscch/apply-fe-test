import { useCartContext } from "@/context/CartContext";
import { cn } from "@/utils/cn";
import GameCard from "@/components/molecules/GameCard";

interface CartGamesProps {
  gridClassname?: string;
  className?: string;
}
export default function CartGames({
  gridClassname,
  className,
}: CartGamesProps) {
  const { cart, removeFromCart } = useCartContext();

  const cartGames = cart?.length > 0;

  return (
    <section className={`grid ${className}`}>
      <ul className={`grid ${gridClassname}`}>
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
