import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white">
      <Link className="mb-2 flex flex-col p-4" href="/">
        <div className="flex space-x-2 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-1.5">
            <p>Zephyr</p>
            <p className="text-sm text-gray-500">@zephyr</p>
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <Separator />
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm  text-gray-500 font-medium hover:bg-emerald-100 hover:text-emerald-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <WrenchScrewdriverIcon className="w-4 mb-1" />
            <div className="hidden md:block">Configurações</div>
          </button>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm  text-gray-500 font-medium hover:bg-emerald-100 hover:text-emerald-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-4 mb-1" />
            <div className="hidden md:block">Sair</div>
          </button>
        </form>
      </div>
    </div>
  );
}
