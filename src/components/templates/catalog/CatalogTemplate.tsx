"use client";

import { Game } from "@/types/games";
import useGames from "@/hooks/useGames";
import CatalogGames from "@/components/organisms/catalog/CatalogGames";
import CatalogHeader from "@/components/organisms/catalog/CatalogHeader";
import Loader from "@/components/molecules/Loader";
import { useRouter, useSearchParams } from "next/navigation";

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

  const router = useRouter();

  const handleGenreChange = (newGenre: string) => {
    setGenre(newGenre);
    router.push(`?genre=${newGenre}&page=1`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?genre=${genre}&page=${newPage}`);
  };

  return (
    <section className="flex flex-col gap-12 pt-12">
      <CatalogHeader currentGenre={genre} setGenre={handleGenreChange} />
      {!loading ? <CatalogGames games={games} /> : <Loader />}
    </section>
  );
}
