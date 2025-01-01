"use client";

import { Game } from "@/types/games";
import useGames from "@/hooks/useGames";
import CatalogGames from "@/components/organisms/catalog/CatalogGames";
import CatalogHeader from "@/components/organisms/catalog/CatalogHeader";
import Loader from "@/components/molecules/Loader";

interface CatalogPageTemplateProps {
  initialGames: Game[];
  initialGenre: string;
  initialPage: number;
}

export default function CatalogTemplate({
  initialGames,
  initialGenre,
  initialPage,
}: CatalogPageTemplateProps) {
  const { games, loading, error, setGenre, setPage, genre } = useGames(
    initialGames,
    initialGenre,
    initialPage
  );

  return (
    <section className="flex flex-col gap-12 pt-12">
      <CatalogHeader currentGenre={genre} setGenre={setGenre} />
      {!loading ? <CatalogGames games={games} /> : <Loader />}
    </section>
  );
}
