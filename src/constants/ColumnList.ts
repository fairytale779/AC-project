import { createColumnHelper } from "@tanstack/react-table";

interface Villager {
  name?: string;
  gender?: string;
  species?: string;
}

const columnHelper = createColumnHelper<Villager>();
export const VillagersColumns = [
  columnHelper.accessor("name", { header: "이름", size: 60 }),
  columnHelper.accessor("gender", { header: "성별", size: 60 }),
  columnHelper.accessor("species", { header: "종", size: 100 }),
];
