import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetArticle = () => {
  return useQuery({
    queryKey: ["articleData"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${process.env.Times_Key}`
      );
      console.log("response", response);

      return response.data;
    },
  });
};
