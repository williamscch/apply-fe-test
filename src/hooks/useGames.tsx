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
    const handleFetching = async () => {
      setLoading(true);
      try {
        const data = await fetchGames(genre === "all" ? "" : genre, page);
        setGames((prevGames) =>
          page === 1 ? data.games : [...prevGames, ...data.games]
        );
        setLoading(false);
      } catch (err) {
        const error = err as Error;
        setError(error?.message);
        setLoading(false);
      }
    };

    handleFetching();
  }, [genre, page]);

  // Reset games and page when genre changes
  useEffect(() => {
    setGames([]);
    setPage(1);
  }, [genre]);

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
