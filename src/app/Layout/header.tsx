import HEADER_LIST from "@/constants/HEADER_LIST";
import Link from "next/link";

export default function AnimalHeader() {
  return (
    <div
      id={"animallHeader"}
      className="flex w-full justify-between items-center px-1 fixed bg-bg-color color-point-color"
    >
      {/* <Link href={"/"}>
        <img src="/ISSUE_LOGO.png" alt="로고" className="w-52 pt-2 pl-7" />
      </Link> */}
      <nav className="flex  h-20 items-center ">
        {HEADER_LIST.map((el: any, idx: number) => {
          return (
            <div key={el.name + idx} className={"mr-3 w-19"}>
              <Link
                href={el.path}
                className="pb-6 mx-20 hover:border-b-8 hover:border-point-color"
              >
                {el.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
