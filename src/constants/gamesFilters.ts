import { allGames } from "@/mocks/games";

export const availableFilters = Array.from(
  new Set(allGames.map((game) => game.genre))
);
