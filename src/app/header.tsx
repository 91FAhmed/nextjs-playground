"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksHead = [
  { path: "/", route: "home" },
  { path: "/blog", route: "blog" },
  { path: "/about", route: "about" },
  { path: "/products", route: "products" },
];

export default function Header() {
  const currentPath = usePathname();

  const renderedLinks = useMemo(() => {
    return linksHead.map((page) => {
      const isActive = currentPath.startsWith(page.path);
      return (
        <Link
          key={page.path}
          className={
            isActive ? "font-bold text-teal-800" : "hover:text-teal-500 px-2"
          }
          href={page.path}
        >
          {page.route}
        </Link>
      );
    });
  }, [currentPath]);

  return (
    <header className="font-serif flex justify-between font-semibold text-xl px-4 py-6">
      <h1>⌘ Acme industries</h1>
      <div>{renderedLinks}</div>
    </header>
  );
}
