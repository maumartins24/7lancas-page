import doar from "../images/7lanca_doacao.jpg";

const VAQUINHA_URL =
  "https://l.instagram.com/?u=https%3A%2F%2Fbenfeitoria.com%2Fprojeto%2Fterreiroogum7lancasestademudanca22ze%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnCXuCl8k3s8nk6TP1RDGXDCv-uRioo9nygp-8Qct_YkRltTDLrr_GPFSbvZM_aem_xtSm3fTJIORKcgm1TuBDmg&e=AT1h7Sgqr44p6MWWeGbPSPEfHPVcJ64FDpHLF-GVatmLu2C2Pi7Nw7JgaKbq4fcVHThiGgjjHsmadF-AMvNLgna3wQKZK8laQTSGhRAkI92EAVWaGcMGbHiB3Q";

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DRKcSICDuz3/";

export default function FundraisingSection() {
  return (
    <section
      id="arrecadacao"
      className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-red-400 mb-3">
              Precisamos levantar 65 mil em 60 dias — toda contribuição é axé
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-red-300">
              Terreiro Ogum 7 Lanças está de mudança
            </h2>

            <p className="text-base md:text-lg text-zinc-200 mb-6 leading-relaxed">
              A potência do nosso axé continua a mesma, mas agora em um espaço
              novo e maior. Para reabrirmos os trabalhos, precisamos da força
              de quem acredita na nossa caminhada. Cada contribuição é um passo
              na construção do nosso Terreiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={VAQUINHA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg shadow-red-500/40 transition"
              >
                Doar agora pela vaquinha
              </a>

              <a
                href="#qr-pix"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-red-500/70 text-red-300 hover:bg-red-900/40 font-medium transition"
              >
                Ver arte da campanha
              </a>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              Se não puder doar agora, compartilhar a campanha com amigos e
              familiares já nos ajuda demais. 💛
            </p>
          </div>

          {/* CARD COM ARTE / QR */}
          <div
            id="qr-pix"
            className="bg-zinc-900/80 border border-red-800/60 rounded-2xl p-6 shadow-2xl flex flex-col items-center"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-red-300">
              Cada doação é axé!
            </h3>

            <p className="text-sm text-zinc-300 mb-4 text-center max-w-sm">
              Essa é a arte oficial da nossa campanha de arrecadação. Você pode
              usar para compartilhar com amigos, grupos e redes sociais.
            </p>

            <div className="bg-white/5 p-3 rounded-2xl mb-4">
              <img
                src={doar}
                alt="Campanha de doação: cada doação é axé"
                className="w-72 md:w-80 h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            <a
              href={VAQUINHA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
            >
              Abrir vaquinha
            </a>
          </div>
        </div>

        {/* SOBRE A CAMPANHA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-300">
              Para onde vai a sua contribuição?
            </h3>
            <p className="text-zinc-200 leading-relaxed">
              Estamos focados em construir um território com infraestrutura,
              conforto e segurança não só para as giras abertas, mas também
              para nossos projetos sociais, culturais e encontros.
            </p>
            <p className="text-zinc-300 text-sm">
              Transparência é compromisso: conforme avançarmos nas etapas da
              obra, vamos compartilhar registros e prestações de contas com a
              comunidade.
            </p>
          </div>

          {/* POST DO INSTAGRAM */}
          <div className="bg-zinc-900/80 border border-red-800/60 rounded-2xl p-6 flex flex-col gap-4">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-red-400 mb-1">
              Instagram
            </p>
            <h4 className="text-lg font-semibold text-red-200 mb-1">
              Veja o post oficial da campanha
            </h4>
            <p className="text-sm text-zinc-300 mb-3">
              Preparamos um post especial explicando a vaquinha. Comentar,
              salvar e compartilhar ajuda a mensagem a chegar em mais pessoas.
            </p>
            <a
              href={INSTAGRAM_POST_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Abrir post no Instagram
            </a>
          </div>
        </div>

        {/* COMO AJUDAR */}
        <div className="border-t border-red-900/60 pt-10">
          <h3 className="text-xl font-semibold text-red-200 mb-4">
            Como você pode ajudar:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-200">
            <li className="bg-zinc-900/70 rounded-xl p-4 border border-zinc-800">
              <strong className="block text-red-300 mb-1">
                1. Faça uma doação
              </strong>
              Qualquer valor é bem-vindo e somado.
            </li>
            <li className="bg-zinc-900/70 rounded-xl p-4 border border-zinc-800">
              <strong className="block text-red-300 mb-1">
                2. Compartilhe a campanha
              </strong>
              Envie o link da vaquinha e o post do Instagram para amigos e
              família.
            </li>
            <li className="bg-zinc-900/70 rounded-xl p-4 border border-zinc-800">
              <strong className="block text-red-300 mb-1">
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
