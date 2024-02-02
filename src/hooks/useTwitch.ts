import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useTwitch = (ApiUrl: string) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  const body = {
    client_id: "qdvvnxyjhng5grdcmtuer9cfyxw5bv",
    client_secret: "zlwrdnph9cccitljdpgi1lszk3wh13",
    grant_type: "client_credentials",
  };

  console.log("current ApiUrl = ", ApiUrl)

  const fetchData = async () => {
    if(ApiUrl === undefined) return
    try {
      setIsLoading(true);
      const OAuthResponse = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        body
      );
      if (!OAuthResponse) {
        throw new Error("Network response was not ok");
      }
      const DataResponse = await axios.get(ApiUrl, {
        headers: {
          "Client-ID": "qdvvnxyjhng5grdcmtuer9cfyxw5bv",
          Authorization: `Bearer ${OAuthResponse.data.access_token}`,
        },
      });
      setData(DataResponse.data.data);
      console.log("ApiData = ",DataResponse.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("start fetching...", "ApiUrl = ", ApiUrl);
    fetchData();
  }, [ApiUrl]);

  return { data, isLoading, error };
};

export default useTwitch;
