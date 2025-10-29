"use client";

import { usePathname } from "next/navigation";

export function HeaderComponents() {
  const pathname = usePathname();

  const links = [
    { name: "Início", href: "" },
    { name: "Sobre", href: "sobre" },
    { name: "Produtos", href: "produtos" },
    { name: "Segurança", href: "seguranca" },
    { name: "Contato", href: "contato" },
    { name: "Abra sua conta", href: "abra-sua-conta" },
  ];

  return (
    <header className="bg-indigo-700 text-white p-6 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight">NeoBank</h1>
      <nav>
        <ul className="flex gap-6">
          {links.map((item) => {
            const isActive =
              pathname === `/${item.href}` || (pathname === "/" && item.href === "");

            return (
              <li key={item.name}>
                <a
                  href={`/${item.href}`}
                  className={`transition relative ${
                    isActive
                      ? "text-blue-300 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-300 after:-bottom-1 after:left-0"
                      : "hover:text-blue-200"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
