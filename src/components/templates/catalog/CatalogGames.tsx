import { Game } from "@/types/game";
import CatalogCard from "@/components/molecules/CatalogCard";

interface CatalogGamesProps {
  games: Game[];
}

export default function CatalogGames({ games }: CatalogGamesProps) {
  return (
    <div className="grid">
      <section className="grid gap-6 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-12">
        {games.map((game) => (
          <CatalogCard key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
}
