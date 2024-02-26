import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Platforms from "../data/Platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60, //24 hrs
    initialData: { count: Platforms.length, results: Platforms },
  });
};
export default usePlatforms;
