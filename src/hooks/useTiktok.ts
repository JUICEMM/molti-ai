import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useTiktok = (ApiUrl: string) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  console.log("data", data);

  const body = {
    client_key: "awzq53gtympk0it5",
    client_secret: "KNCtCX1g6cRjfByMnGCJIyDhLPb8GI4u",
    grant_type: "client_credentials",
  };

  console.log("isLoading", isLoading);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const OAuthResponse = await axios.post(
        "https://open.tiktokapis.com/v2/oauth/token/",
        body
      );
      if (!OAuthResponse) {
        throw new Error("Network response was not ok");
      }
      console.log(OAuthResponse.data);
      const DataResponse = await axios.get('https://open.tiktokapis.com/v2/research/video/query/?fields=id,like_count', {
        headers: {
          Authorization: `Bearer ${OAuthResponse.data.access_token}`,
        },
      });
      console.log("ApiData", DataResponse.data);
      setData(DataResponse.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("start fetching...", ApiUrl);
    fetchData();
  }, [ApiUrl]);

  return { data, isLoading, error };
};

export default useTiktok;
