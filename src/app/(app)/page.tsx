"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchGames } from "@/services/api";
import { Game } from "@/types/game";
import PageTemplate from "@/components/templates/shared/PageTemplate";
import CatalogTemplate from "@/components/templates/catalog/CatalogTemplate";

export default function Home() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const page = searchParams.get("page");
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetchGames(genre || "", Number(page) || 1).then((data) => {
      setGames(data.games);
    });
  }, []);

  return (
    <PageTemplate>
      <CatalogTemplate games={games} />
    </PageTemplate>
  );
}
