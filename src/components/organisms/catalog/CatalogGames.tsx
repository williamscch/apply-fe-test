import { Game } from "@/types/games";
import CatalogCard from "@/components/molecules/CatalogCard";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Loader from "@/components/molecules/Loader";

interface CatalogGamesProps {
  games: Game[];
  gridClassname?: string;
  className?: string;
  loading?: boolean;
  loadMoreButton?: {
    render: boolean;
    label?: string;
    onClick: () => void;
  };
}

export default function CatalogGames({
  games,
  gridClassname,
  className,
  loading = false,
  loadMoreButton,
}: CatalogGamesProps) {
  const hasGames = games?.length > 0;

  const renderGames = hasGames && (
    <ul
      className={`grid gap-6 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-12 ${gridClassname}`}
    >
      {games.map((game) => (
        <li key={game.id}>
          <CatalogCard
            key={game.id}
            game={game}
            primaryButton={{ onClick: () => {}, label: "Add to cart" }}
          />
        </li>
      ))}
    </ul>
  );

  const renderNoGames = !hasGames && !loading && (
    <Text variant="span" className="text-center p-6">
      No games found
    </Text>
  );

  const renderLoader = loading && (
    <div className="mt-6">
      <Loader />
    </div>
  );

  const renderButton = loadMoreButton?.render && (
    <Button
      className="mt-6 sm:mt-12 uppercase w-full xs:w-fit"
      onClick={() => loadMoreButton.onClick()}
    >
      {loadMoreButton.label || "SEE MORE"}
    </Button>
  );

  return (
    <section className={`grid ${className}`}>
      {renderGames}
      {renderNoGames}
      {renderLoader}
      {renderButton}
    </section>
  );
}
