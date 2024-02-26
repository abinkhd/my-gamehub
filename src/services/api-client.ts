import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "acdb73dc6cd6421fa3cc1b3143f6d2f8",
  },
});
