import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import Genre from "../data/Genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenres = () =>
    apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60, //24 hrs
    initialData: { count: Genre.length, results: Genre },
  });
};

export default useGenre;
