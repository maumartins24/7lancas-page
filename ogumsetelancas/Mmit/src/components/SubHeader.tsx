import { Link } from "react-router-dom";

export default function SubHeader() {
  const menuItems = [
    { name: "Sobre nós", href: "#sobre", type: "anchor" },
    { name: "Conquistas", href: "#conquistas", type: "anchor" },
    { name: "Localização", href: "#localizacao", type: "anchor" },
    { name: "Conheça nossa lojinha", href: "#lojinha", type: "anchor" },
    { name: "Rifas & Oportunidades", href: "#rifas", type: "anchor" },
    { name: "Arrecadação", href: "/arrecadacao", type: "route" },
  ];

  return (
    <nav className="sticky top-[70px] z-40 bg-white/60 dark:bg-neutral-950/70 backdrop-blur-lg border-b border-blue-200/30 dark:border-red-900/20 shadow-sm">
  <ul className="flex flex-wrap justify-center gap-9 md:gap-12 py-3 md:py-4 text-xs md:text-sm font-medium">

        {menuItems.map((item) => (
          <li key={item.name}>
            {item.type === "route" ? (
              <Link
                to={item.href}
                className="text-blue-800 dark:text-red-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ) : (
              <a
                href={item.href}
                className="text-blue-800 dark:text-red-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
