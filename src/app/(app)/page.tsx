import { fetchGames } from "@/services/games";
import CatalogPage from "@/components/pages/CatalogPage";

export default async function Page({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {
  const genre = searchParams.genre || "";
  const { games, totalPages } = await fetchGames(genre);

  return (
    <CatalogPage
      initialTotalPages={totalPages}
      initialGames={games}
      initialGenre={genre}
    />
  );
}
