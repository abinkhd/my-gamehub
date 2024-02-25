import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import Platforms from "../data/Platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatform = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);
  return useQuery({
    queryKey: ["platform"],
    queryFn: fetchPlatform,
    staleTime: 24 * 60 * 60, //24 hrs
    initialData: { count: Platforms.length, results: Platforms },
  });
};
export default usePlatforms;
