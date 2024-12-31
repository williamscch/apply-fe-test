import { Game } from "@/types/game";
import CatalogCard from "@/components/molecules/CatalogCard";
import Button from "@/components/atoms/Button";

interface CatalogGamesProps {
  games: Game[];
  gridClassname?: string;
  className?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
  buttonLabel?: string;
}

export default function CatalogGames({
  games,
  gridClassname,
  className,
  buttonLabel = "SEE MORE",
  showButton = true,
  onButtonClick,
}: CatalogGamesProps) {
  return (
    <section className={`grid ${className}`}>
      <ul
        className={`grid gap-6 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-12" ${gridClassname}`}
      >
        {games.map((game) => (
          <li key={game.id}>
            <CatalogCard key={game.id} game={game} />
          </li>
        ))}
      </ul>
      {showButton && (
        <Button
          className="mt-6 sm:mt-12 uppercase w-full xs:w-fit"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      )}
    </section>
  );
}
