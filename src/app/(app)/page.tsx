"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchGames } from "@/services/api";
import { Game } from "@/types/game";
import { availableFilters } from "@/utils/endpoint";
import Button from "@/components/atoms/Button";
import PageLayout from "@/components/templates/PageLayout";
import Dropdown from "@/components/molecules/Dropdown";
import CatalogCard from "@/components/molecules/CatalogCard";
import Text from "@/components/atoms/Text";

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
    <PageLayout>
      <div className="text-wrap min-h-64">
        <Text variant="h1">Top Sellers</Text>
        <ul>
          <Dropdown
            label="Genre"
            onChange={(value) => {}}
            id="genre-select"
            options={availableFilters}
            value=""
          />
          <Button>SEE MORE</Button>
          {games.map((game) => (
            <li key={game.id}>
              <CatalogCard game={game} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
