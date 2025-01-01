import { API_CONFIG } from "@/config/api";
import { GamesResponse } from "@/types/games";

export const fetchGames = async (
  genre: string,
  page = 1
): Promise<GamesResponse> => {
  const url = new URL(`${API_CONFIG.baseUrl}/games`);
  url.searchParams.append("genre", genre);
  url.searchParams.append("page", page.toString());

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
