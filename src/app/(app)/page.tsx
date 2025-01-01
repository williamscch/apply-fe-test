import { fetchGames } from "@/services/games";
import PageTemplate from "@/components/templates/shared/PageTemplate";
import CatalogTemplate from "@/components/templates/catalog/CatalogTemplate";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string; page?: string };
}) {
  const genre = searchParams.genre || "initial";
  const page = parseInt(searchParams.page || "1", 10);

  const { games } = await fetchGames(genre, page);

  return (
    <PageTemplate>
      <CatalogTemplate
        initialGames={games}
        initialGenre={genre}
        initialPage={page}
      />
    </PageTemplate>
  );
}
