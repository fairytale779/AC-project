"use client";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Villagers from "./components/villagers";

import AnimalHeader from "./Layout/header";

function Home() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const URL = "https://api.nookipedia.com/villagers";

  const VillagersData = async () => {
    try {
      setError(null);
      setData([]);
      const response = await axios.get(URL, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_APP_API_KEY,
          "Accept-Version": "1.1.0",
        },
      });
      setData(response.data);
      console.log(response.data);
      console.log(`data:`, data);
    } catch (e: any) {
      setError(e);
    }
  };

  useEffect(() => {
    VillagersData();
  }, []);

  // if (error) return <div>error</div>;
  // if (!data) return <div>없다능</div>;

  return (
    <>
      <AnimalHeader />
      <Box>
        {data.map((item: any) => {
          return (
            <Villagers
              key={item.id}
              name={item.name}
              species={item.species}
              gender={item.gender}
              image_url={item.image_url}
            />
          );
        })}
      </Box>
    </>
  );
}

export default Home;
