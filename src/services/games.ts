import { API_CONFIG } from "@/config/api";
import { GamesResponse } from "@/types/games";

export const fetchGames = async (
  genre: string = "",
  page: number = 1
): Promise<GamesResponse> => {
  const url = new URL(`${API_CONFIG.baseUrl}/games`);
  url.searchParams.append("genre", genre === "all" ? "" : genre);
  url.searchParams.append("page", page.toString());

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(
        `API error: ${response.status} - ${
          errorResponse.message || "Unknown error"
        }`
      );
      throw new Error(
        errorResponse.message || `Error fetching games: ${response.statusText}`
      );
    }

    const data: GamesResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return {
      games: [],
      totalPages: 0,
      availableFilters: [],
      currentPage: page,
    };
  }
};
