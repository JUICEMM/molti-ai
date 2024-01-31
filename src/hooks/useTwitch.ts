import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useTwitch = (ApiUrl: string) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  console.log("data", data);

  const body = {
    client_id: "qdvvnxyjhng5grdcmtuer9cfyxw5bv",
    client_secret: "zlwrdnph9cccitljdpgi1lszk3wh13",
    grant_type: "client_credentials",
  };

  console.log("isLoading", isLoading);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const OAuthResponse = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        body
      );
      if (!OAuthResponse) {
        throw new Error("Network response was not ok");
      }
      console.log(OAuthResponse.data);
      const DataResponse = await axios.get(ApiUrl, {
        headers: {
          "Client-ID": "qdvvnxyjhng5grdcmtuer9cfyxw5bv",
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

export default useTwitch;
