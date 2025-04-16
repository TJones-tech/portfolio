import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
        <div className="h-full col-span-12 p-4 text-base text-center bg-neutral-950 lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-neutral-950 rounded-2xl lg:col-span-9">
          <Navbar />
          {children}
        </div>
      </div>
    </section>
  );
}
