import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Genre from "../data/Genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60, //24 hrs
    initialData: { count: Genre.length, results: Genre },
  });
};

export default useGenre;
