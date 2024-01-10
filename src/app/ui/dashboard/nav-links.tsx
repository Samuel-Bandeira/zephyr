"use client";

import {
  UserGroupIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Visão Geral", href: "/overview", icon: HomeIcon },
  {
    name: "Notificações",
    href: "/carbon-management",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Relatórios",
    href: "/carbon-management",
    icon: GlobeAmericasIcon,
  },
  { name: "Usuários", href: "/users", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-gray-500 hover:bg-blue-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-blue-600 text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-4 mb-1" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
