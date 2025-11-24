import { useState } from "react";

const VAQUINHA_URL =
  "https://l.instagram.com/?u=https%3A%2F%2Fbenfeitoria.com%2Fprojeto%2Fterreiroogum7lancasestademudanca22ze%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnCXuCl8k3s8nk6TP1RDGXDCv-uRioo9nygp-8Qct_YkRltTDLrr_GPFSbvZM_aem_xtSm3fTJIORKcgm1TuBDmg&e=AT1h7Sgqr44p6MWWeGbPSPEfHPVcJ64FDpHLF-GVatmLu2C2Pi7Nw7JgaKbq4fcVHThiGgjjHsmadF-AMvNLgna3wQKZK8laQTSGhRAkI92EAVWaGcMGbHiB3Q";

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DRKcSICDuz3/";

// 🔑 Substitua pelo CNPJ real do Terreiro
const PIX_KEY = "24249075/0001-79";

export default function FundraisingSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
      alert(
        `Não foi possível copiar automaticamente. Use a chave PIX (CNPJ): ${PIX_KEY}`
      );
    }
  };

  return (
    <section
      id="arrecadacao"
      className="
        py-16 md:py-20
        bg-gradient-to-b
        from-blue-50 via-white to-blue-50
        dark:from-black dark:via-zinc-950 dark:to-black
        text-blue-900 dark:text-white
      "
    >
      <div className="container mx-auto px-6 max-w-6xl space-y-12 md:space-y-16">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <p className="text-[0.65rem] md:text-xs lg:text-sm uppercase tracking-[0.25em] text-blue-600 dark:text-red-400 mb-2 md:mb-3">
              Precisamos levantar 65 mil em 60 dias — toda contribuição é axé
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 text-blue-700 dark:text-red-300">
              Terreiro Ogum 7 Lanças está de mudança
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-blue-900 dark:text-zinc-200 mb-4 md:mb-4 leading-relaxed">
              A potência do nosso axé continua a mesma, mas agora em um espaço
              novo e maior. Para reabrirmos os trabalhos, precisamos da força
              de quem acredita na nossa caminhada. Cada contribuição é um passo
              na construção do nosso Terreiro.
            </p>

            <p className="mt-3 md:mt-4 text-xs md:text-sm text-blue-700 dark:text-zinc-400 max-w-md">
              Se não puder doar agora, compartilhar a campanha com amigos e
              familiares já nos ajuda demais. 💛
            </p>

             <div className="w-full max-w-xl mx-auto mt-2 p-6 rounded-xl bg-white dark:bg-black/40 shadow-lg border border-gray-200 dark:border-red-800/40 transition-all">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-red-500">
            R$ 1.305
          </h2>
          <p className="text-gray-600 dark:text-gray-300 -mt-1">
            arrecadados da meta de <span className="font-semibold">R$ 22.700</span>
          </p>

          {/* PROGRESS BAR */}
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
            <div
              className="h-3 bg-blue-600 dark:bg-red-500 rounded-full"
              style={{ width: "6%" }} // 6% da meta
            ></div>
          </div>

          {/* INDICADORES */}
          <div className="flex justify-between text-center mt-6">
            <div>
              <p className="text-xl font-bold text-blue-600 dark:text-red-500">
                6%
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                da meta 1 de 3
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-600 dark:text-red-500">
                23
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Benfeitores
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-600 dark:text-red-500">
                52 dias
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                restantes
              </p>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* ÚNICO BOTÃO DE VAQUINHA DA TELA */}
            <a
              href={VAQUINHA_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-1/2 text-center bg-red-600 dark:bg-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Apoiar
            </a>

            {/* PIX – COPIAR CNPJ */}
            <button
              onClick={handleCopyPix}
              className="w-full sm:w-1/2 bg-green-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Pix Copia e Cola
            </button>
          </div>

          <div className="mt-3 text-xs text-gray-700 dark:text-gray-300">
            <p>
              Chave PIX (CNPJ): <span className="font-mono font-semibold">{PIX_KEY}</span>
            </p>
            {copied && (
              <p className="text-green-600 dark:text-green-400 mt-1">
                Chave PIX copiada com sucesso!
              </p>
            )}
          </div>
        </div>

          </div>

          {/* CARD COM VÍDEO STORIES */}
          <div
            id="qr-pix"
            className="
              bg-zinc-50 dark:bg-zinc-900/80
              border border-red-200 dark:border-red-800/60
              rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col items-center
            "
          >
            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1.5 md:mb-2 text-blue-700 dark:text-red-300">
              Cada doação é axé!
            </h3>

           
            <div className="bg-black dark:bg-black p-2.5 md:p-3 rounded-2xl w-full">
              <div
                className="relative w-full rounded-xl overflow-hidden"
                style={{ aspectRatio: "9 / 16" }} // stories
              >
                <iframe
                  src="https://www.youtube.com/embed/w99_4T0MGjw?autoplay=1&mute=1&playsinline=1&loop=1&playlist=w99_4T0MGjw&vq=hd1080&quality=hd1080"
                  title="Campanha de doação - Terreiro Ogum 7 Lanças"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO DE ARRECADAÇÃO → VAI PARA A VAQUINHA */}
        

        {/* SOBRE A CAMPANHA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-red-300">
              Para onde vai a sua contribuição?
            </h3>
            <p className="text-sm md:text-base text-blue-900 dark:text-zinc-200 leading-relaxed">
              Estamos focados em construir um território com infraestrutura,
              conforto e segurança não só para as giras abertas, mas também
              para nossos projetos sociais, culturais e encontros.
            </p>
            <p className="text-xs md:text-sm text-blue-800 dark:text-zinc-300">
              Transparência é compromisso: conforme avançarmos nas etapas da
              obra, vamos compartilhar registros e prestações de contas com a
              comunidade.
            </p>
          </div>

          {/* POST DO INSTAGRAM */}
          <div
            className="
              bg-zinc-50 dark:bg-zinc-900/80
              border border-red-200 dark:border-red-800/60
              rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4
            "
          >
            <p className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] text-blue-600 dark:text-red-400">
              Instagram
            </p>
            <h4 className="text-base md:text-lg font-semibold text-blue-700 dark:text-red-200">
              Veja o post oficial da campanha
            </h4>
            <p className="text-xs md:text-sm text-blue-900 dark:text-zinc-300 leading-relaxed">
              Preparamos um post especial explicando a vaquinha. Comentar,
              salvar e compartilhar ajuda a mensagem a chegar em mais pessoas.
            </p>
            <a
              href={INSTAGRAM_POST_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs md:text-sm font-semibold hover:opacity-90 transition"
            >
              Abrir post no Instagram
            </a>
          </div>
        </div>

        {/* COMO AJUDAR */}
        <div className="border-t border-red-200 dark:border-red-900/60 pt-8 md:pt-10">
          <h3 className="text-lg md:text-xl font-semibold text-blue-700 dark:text-red-200 mb-3 md:mb-4">
            Como você pode ajudar:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 text-xs md:text-sm text-blue-900 dark:text-zinc-200">
            <li className="bg-zinc-50 dark:bg-zinc-900/70 rounded-xl p-3.5 md:p-4 border border-zinc-200 dark:border-zinc-800">
              <strong className="block text-blue-700 dark:text-red-300 mb-1">
                1. Faça uma doação
              </strong>
              Qualquer valor é bem-vindo e somado.
            </li>
            <li className="bg-zinc-50 dark:bg-zinc-900/70 rounded-xl p-3.5 md:p-4 border border-zinc-200 dark:border-zinc-800">
              <strong className="block text-blue-700 dark:text-red-300 mb-1">
                2. Compartilhe a campanha
              </strong>
              Envie o link da vaquinha e o post do Instagram para amigos e
              família.
            </li>
            <li className="bg-zinc-50 dark:bg-zinc-900/70 rounded-xl p-3.5 md:p-4 border border-zinc-200 dark:border-zinc-800">
              <strong className="block text-blue-700 dark:text-red-300 mb-1">
                3. Fortaleça nossas ações
              </strong>
              Participe das giras, encontros, rifas e atividades do Terreiro.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
