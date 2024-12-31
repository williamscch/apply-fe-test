"use client";

import Button from "@/components/atoms/Button";
import PageLayout from "@/components/templates/PageLayout";
import { fetchGames } from "@/services/api";
import { Game } from "@/types/game";
import { availableFilters } from "@/utils/endpoint";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Dropdown from "@/components/molecules/Dropdown";

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
        <h1 className="text-2xl font-bold">Games</h1>
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
            <li key={game.id} className="text-text_light">
              {game.name}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
