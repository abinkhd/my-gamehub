import { GameQuery } from "./../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortItem,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data);
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["game", gameQuery],
    queryFn: fetchGames,
  });
};
export default useGames;
