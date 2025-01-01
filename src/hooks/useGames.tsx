import { useState, useEffect } from "react";
import { Game } from "@/types/games";
import { fetchGames } from "@/services/games";

const useGames = (
  initialGames: Game[] = [],
  initialGenre = "",
  initialPage = 1
) => {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [genre, setGenre] = useState(initialGenre);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (genre !== initialGenre || page !== initialPage || games.length === 0) {
      const handleFetching = async () => {
        setLoading(true);
        try {
          const data = await fetchGames(genre === "all" ? "" : genre, page);
          setGames(data.games);
          setLoading(false);
        } catch (err) {
          const error = err as Error;
          setError(error?.message);
          setLoading(false);
        }
      };

      handleFetching();
    }
  }, [genre, page, initialGenre, initialPage]);

  return {
    games,
    genre,
    setGenre,
    page,
    setPage,
    loading,
    error,
  };
};

export default useGames;
