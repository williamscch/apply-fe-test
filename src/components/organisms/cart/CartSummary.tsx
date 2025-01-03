import { useCartContext } from "@/context/CartContext";
import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

function CartSummary() {
  const { cart, totalPrice, totalQuantity } = useCartContext();
  const cartGames = cart?.length > 0;

  if (cartGames)
    return (
      <section className="flex flex-col gap-10 md:gap-8">
        <Card className="h-fit py-6 px-4 md:py-8 md:px-6 flex flex-col gap-6 md:gap-8">
          <div className="grid gap-3">
            <Text variant="h2">Order Summary</Text>
            <Text variant="span">{totalQuantity} items</Text>
          </div>

          <div className="grid gap-6 mb-5">
            <ul className="grid gap-3 pt-5 pb-6 border-b border-border_neutral">
              {cart.map((game) => (
                <li
                  className="flex justify-between items-center gap-2"
                  key={game.id}
                >
                  <Text variant="span">{game.name}</Text>
                  <Text variant="span">{game.price}</Text>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center gap-2">
              <Text variant="h3">Order Total</Text>
              <Text variant="h3">{totalPrice}</Text>
            </div>
          </div>
        </Card>
        <Button className="w-full">Checkout</Button>
      </section>
    );

  return null;
}

export default CartSummary;
