import axios from "axios";
import { useEffect, useState } from "react";

const TestPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/1",
          
        );
        if (!response) {
          throw new Error("Network response was not ok");
        }
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your component using the fetched data
  return (
    <div>
      <h1>Netease Music Toplist</h1>
      {/* Use 'data' to render the fetched information */}
      {/* For example: <p>{data.someProperty}</p> */}
    </div>
  );
};

export default TestPage;
