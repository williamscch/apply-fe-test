import { Game } from "@/types/games";
import CatalogGames from "@/components/organisms/catalog/CatalogGames";
import CatalogHeader from "@/components/organisms/catalog/CatalogHeader";

interface CatalogTemplateProps {
  games: Game[];
  currentGenre: string;
  loading: boolean;
  loadMoreEnabled: boolean;
  onGenreChange: (newGenre: string) => void;
  onLoadMore: () => void;
}

export default function CatalogTemplate({
  games,
  currentGenre,
  loading,
  loadMoreEnabled,
  onGenreChange,
  onLoadMore,
}: CatalogTemplateProps) {
  return (
    <section className="flex flex-col gap-12 pt-12">
      <CatalogHeader currentGenre={currentGenre} setGenre={onGenreChange} />
      <CatalogGames
        games={games}
        onButtonClick={onLoadMore}
        showButton={loadMoreEnabled}
        loading={loading}
      />
    </section>
  );
}
