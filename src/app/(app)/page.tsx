"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchGames } from "@/services/api";
import { Game } from "@/types/game";
import { availableFilters } from "@/utils/endpoint";
import Button from "@/components/atoms/Button";
import Dropdown from "@/components/molecules/Dropdown";
import CatalogCard from "@/components/molecules/CatalogCard";
import Text from "@/components/atoms/Text";
import PageTemplate from "@/components/templates/shared/PageTemplate";
import CatalogGames from "@/components/templates/catalog/CatalogGames";

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
      <div className="text-wrap min-h-64">
        <Text variant="h1">Top Sellers</Text>
        <ul>
          {/* <Dropdown
            label="Genre"
            onChange={(value) => {}}
            id="genre-select"
            options={availableFilters}
            value=""
          /> */}
          <Button>SEE MORE</Button>
          <CatalogGames games={games} />
        </ul>
      </div>
    </PageTemplate>
  );
}
