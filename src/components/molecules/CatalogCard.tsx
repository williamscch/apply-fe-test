import { Game } from "@/types/game";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";

interface CatalogCardProps {
  game: Game;
}

export default function CatalogCard({ game }: CatalogCardProps) {
  return (
    <Card>
      <div className="w-full rounded-t-2xl overflow-hidden aspect-1_16 md:aspect-1_38 bg-surface_neutral">
        <Image
          width={240}
          height={335}
          src={game.image}
          alt={`${game.name}-img`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 mt-5 gap-4">
        <div className="grid gap-3">
          <Text variant="h5" className="uppercase">
            {game.genre}
          </Text>
          <div className="grid grid-cols-2fr_1fr w-full gap-1">
            <Text variant="h4">{game.name}</Text>
            <Text variant="h3" className="text-end">
              ${game.price}
            </Text>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-auto">
          ADD TO CART
        </Button>
      </div>
    </Card>
  );
}
