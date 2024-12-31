import { Game } from "@/types/game";
import Image from "next/image";
import Button from "../atoms/Button";

interface CatalogCardProps {
  game: Game;
}
export default function CatalogCard({ game }: CatalogCardProps) {
  return (
    <div className="border-half border-border_neutral rounded-2xl overflow-hidden p-6">
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-t-2xl overflow-hidden aspect-1_16 md:aspect-1_38 bg-surface_neutral">
          <Image
            width={240}
            height={335}
            src={game.image}
            alt={`${game.name}-img`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h2>{game.genre}</h2>
            <div className="grid grid-cols-2fr_1fr w-full gap-1">
              <h2 className="break-all">{game.name}</h2>
              <span className="text-end">{game.price}</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}
