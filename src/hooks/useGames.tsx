import { useState, useEffect } from "react";
import { Game } from "@/types/games";
import { fetchGames } from "@/services/games";

export function useGames(
  initialGames: Game[] = [],
  initialGenre = "",
  initialTotalPages = 0
) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [genre, setGenre] = useState(initialGenre);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [hasFetchedInitialData, setHasFetchedInitialData] = useState(false);

  const loadMoreEnabled = totalPages > 1 && page < totalPages && !loading;

  const handleLoadMore = () => {
    const newPage = page + 1;
    if (newPage > totalPages || newPage < 1) return;
    setPage(newPage);
  };

  useEffect(() => {
    const fetchAndSetGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGames(genre, page);
        setGames((prevGames) =>
          page === 1 ? data.games : [...prevGames, ...data.games]
        );
        setTotalPages(data.totalPages);
      } catch (err) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (hasFetchedInitialData) {
      fetchAndSetGames();
    } else {
      setHasFetchedInitialData(true);
    }
  }, [genre, page]);

  useEffect(() => {
    if (hasFetchedInitialData) {
      setPage(1);
      setGames([]);
    }
  }, [genre]);

  return {
    games,
    genre,
    loading,
    error,
    totalPages,
    loadMoreEnabled,
    setGenre,
    handleLoadMore,
  };
}
