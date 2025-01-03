import { Game } from "@/types/games";
import CatalogGames from "@/components/organisms/catalog/CatalogGames";
import CatalogHeader from "@/components/organisms/catalog/CatalogHeader";

interface CatalogTemplateProps {
  pageTitle?: string;
  games: Game[];
  currentGenre: string;
  loading: boolean;
  loadMoreEnabled: boolean;
  onGenreChange: (newGenre: string) => void;
  onLoadMore: () => void;
}

export default function CatalogTemplate({
  pageTitle,
  games,
  currentGenre,
  loading,
  loadMoreEnabled,
  onGenreChange,
  onLoadMore,
}: CatalogTemplateProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <CatalogHeader
        title={pageTitle}
        currentGenre={currentGenre}
        setGenre={onGenreChange}
      />
      <CatalogGames
        games={games}
        loading={loading}
        loadMoreButton={{
          render: loadMoreEnabled,
          onClick: onLoadMore,
        }}
      />
    </section>
  );
}
