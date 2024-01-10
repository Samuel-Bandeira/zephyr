import TopNav from "../../ui/dashboard/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <TopNav />
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
