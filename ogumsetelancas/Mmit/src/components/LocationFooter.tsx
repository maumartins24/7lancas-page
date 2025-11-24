import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export default function LocationFooter() {
  return (
    <section
      id="localizacao"
      className="
        w-full
        pt-24 pb-16
        bg-gradient-to-b
        from-blue-50 via-white to-blue-100
        dark:from-black dark:via-neutral-950 dark:to-black
        text-slate-900 dark:text-zinc-200
      "
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* COLUNA ESQUERDA */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="
              bg-blue-600 dark:bg-red-600
              text-white
              p-3 rounded-xl text-2xl
            ">
              <FaUsers />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Terreiro Ogum 7 Lanças
            </h2>
          </div>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-700 dark:text-red-400" />
            Av. Itaquera, 1102 - Parque Maria Luiza
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-700 dark:text-red-400" />
            +55 (11) 99424-68919
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-700 dark:text-red-400" />
            terreiroogumsetelancas@gmail.com
          </p>

          {/* Bolinhas (mantidas) */}
          <div className="flex gap-4 pt-4">
            <span className="w-6 h-6 rounded-full bg-red-500/40 dark:bg-red-700/40"></span>
            <span className="w-6 h-6 rounded-full bg-red-500/40 dark:bg-red-700/40"></span>
            <span className="w-6 h-6 rounded-full bg-red-500/40 dark:bg-red-700/40"></span>
          </div>
        </div>

        {/* COLUNA DIREITA — MAPA */}
        <div
          className="
            w-full h-[340px]
            rounded-2xl
            overflow-hidden
            shadow-lg
            border border-blue-200 dark:border-red-800/40
            bg-white dark:bg-neutral-900
          "
        >
          <iframe
            title="Localização Ogum 7 Lanças"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.4985%2C-23.5525%2C-46.4935%2C-23.5480&amp;layer=mapnik&amp;marker=-23.5505%2C-46.4960"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* RODAPÉ */}
      <p className="text-center text-xs mt-12 opacity-80">
        © 2025 Terreiro Ogum 7 Lanças. Construindo caminhos, ajudando a comunidade e lutando pelos nossos.
      </p>
    </section>
  );
}
