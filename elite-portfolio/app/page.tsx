import Image from "next/image";
import Sidebar from "./src/components/Sidebar/Sidebar";
import Navbar from "./src/components/Navbar/Navbar";
import Main from "./about/page";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 px-48 my-14 max-[767px]:grid max-[767px]:grid-rows-2 max-[767px]:grid-flow-col max-[767px]:gap-4 max-[767px]:px-3 max-[767px]:my-7">
      <div className="col-span-3 bg-neutral-950 rounded-2xl max-[767px]:col-span-12">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-neutral-950  rounded-2xl max-[767px]:col-span-12">
        <Main />
      </div>
    </div>
  );
}
