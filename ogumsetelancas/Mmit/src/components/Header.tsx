import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoAzul from "@/images/7lanca_azul-removebg-preview.png";
import logoVermelha from "@/images/7lanca_vermelho-removebg-preview.png";

export default function Header() {
  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-white/60 dark:bg-neutral-950/80
      backdrop-blur-xl border-b border-blue-200/40
      duration-300
    ">
      <div className="
        max-w-6xl mx-auto
        flex items-center justify-between
        px-4 md:px-6
        py-1 md:py-1.5     /* ⬅ DIMINUÍMOS A ALTURA DO HEADER */
      ">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          {/* Logo claro */}
          <img
            src={logoAzul}
            alt="Símbolo Ogum 7 Lanças - modo claro"
            className="
              w-14 h-14 md:w-16 md:h-16   /* ⬅ TAMANHO IDEAL, VISÍVEL E EQUILIBRADO */
              object-contain
              dark:hidden
              transition-transform duration-300
            "
          />

          {/* Logo escuro */}
          <img
            src={logoVermelha}
            alt="Símbolo Ogum 7 Lanças - modo escuro"
            className="
              w-14 h-14 md:w-16 md:h-16   /* ⬅ TAMANHO IGUAL NO MODO ESCURO */
              object-contain
              hidden dark:block
              transition-transform duration-300
            "
          />
        </Link>

        {/* NOME CENTRAL */}
        <h1 className="
          text-lg md:text-xl font-extrabold tracking-tight
          text-blue-700 dark:text-red-400
          text-center flex-1
          translate-x-[-1rem] md:translate-x-[-0.5rem]
          transition-all duration-300
        ">
          Ogum 7 Lanças
        </h1>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/ogumsetelancas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="
            text-blue-700 dark:text-red-400
            hover:scale-110 transition-transform duration-200
          "
        >
          <FaInstagram size={24} />
        </a>

      </div>
    </header>
  );
}
