"use client";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Villagers from "../components/villagers";
import { useRouter } from "next/navigation";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { VillagersColumns } from "@/constants/ColumnList";
import TanstackTable from "../components/tanstackTable/TanstackTable";

export default function VillagerList() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]); // 초기값을 빈 배열로 설정
  const [error, setError] = useState(null);
  const URL = "https://api.nookipedia.com/villagers";

  const VillagersData = async () => {
    try {
      setData([]); // 데이터 요청 전에 빈 배열로 초기화
      setError(null);
      const response = await axios.get(URL, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_APP_API_KEY,
          "Accept-Version": "1.1.0",
        },
      });
      setData(response.data);
    } catch (e: any) {
      setError(e);
    }
  };

  useEffect(() => {
    VillagersData();
  }, []);

  if (data.length === 0) {
    // 빈 배열로 체크
    return <div>Loading...</div>;
  }

  const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
    (id) => data.find((item) => item.id === id)
  );

  return (
    <>
      <TanstackTable data={uniqueData} columns={VillagersColumns} />
      {/* <Box>
        <div>
          {uniqueData.map((item) => (
            <Villagers
              key={item.id}
              name={item.name}
              species={item.species}
              gender={item.gender}
              image_url={item.image_url}
            />
          ))}
        </div>
      </Box> */}
    </>
  );
}
