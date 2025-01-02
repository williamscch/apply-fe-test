import { availableFilters } from "@/constants/gamesFilters";
import { ITEMS_PER_PAGE } from "@/constants/pagination";
import { allGames } from "@/mocks/games";
import { Game } from "@/types/games";
import { delay } from "@/utils/api/delay";
import { paginate } from "@/utils/api/paginate";

function filterGamesByGenre(games: Game[], genre: string | undefined) {
  return genre
    ? games.filter((game) => game.genre.toLowerCase() === genre.toLowerCase())
    : games;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre")?.trim();
  let page = parseInt(searchParams.get("page") ?? "1", 10);

  if (isNaN(page) || page < 1) page = 1;

  try {
    let games = filterGamesByGenre(allGames, genre);

    await delay(2000);

    const paginatedGames = paginate<Game>(games, page, ITEMS_PER_PAGE);

    if (paginatedGames.length === 0) {
      return Response.json(
        { message: "No games found for given request", games: [] },
        { status: 404 }
      );
    }

    const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);
    const currentPage = page;

    return Response.json({
      games: paginatedGames,
      availableFilters,
      totalPages,
      currentPage,
    });
  } catch (err) {
    const error = err as Error;
    return Response.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
