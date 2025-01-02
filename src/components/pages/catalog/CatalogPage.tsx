"use client";

import { Game } from "@/types/games";
import { useGames } from "@/hooks/useGames";
import { useGenreParams } from "@/hooks/useGenreParams";
import CatalogTemplate from "@/components/templates/catalog/CatalogTemplate";
import PageTemplate from "@/components/templates/shared/PageTemplate";

interface CatalogPageProps {
  initialGames: Game[];
  initialGenre: string;
  initialTotalPages: number;
}

export default function CatalogPage({
  initialGames,
  initialGenre,
  initialTotalPages,
}: CatalogPageProps) {
  const { currentGenre, setGenreInURL } = useGenreParams(initialGenre);
  const { games, loadMoreEnabled, loading, setGenre, handleLoadMore } =
    useGames(initialGames, currentGenre, initialTotalPages);

  return (
    <PageTemplate>
      <CatalogTemplate
        games={games}
        currentGenre={currentGenre}
        loading={loading}
        loadMoreEnabled={loadMoreEnabled}
        onGenreChange={(newGenre) => {
          if (newGenre === currentGenre) return;
          setGenre(newGenre);
          setGenreInURL(newGenre);
        }}
        onLoadMore={handleLoadMore}
      />
    </PageTemplate>
  );
}
