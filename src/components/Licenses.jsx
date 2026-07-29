import { Check } from "lucide-react";

const licenses = [
  {
    name: "Licença Básica",
    price: "80,00",
    features: [
      "Arquivo MP3",
      "Com tag do produtor",
      "Até 10.000 streams/plays",
      "Uso não exclusivo",
    ],
    highlight: false,
  },
  {
    name: "Licença Premium",
    price: "200,00",
    features: [
      "Arquivo WAV (qualidade de estúdio)",
      "Sem tag do produtor",
      "Até 100.000 streams/plays",
      "Uso não exclusivo",
    ],
    highlight: true,
  },
  {
    name: "Licença Exclusiva",
    price: "800,00",
    features: [
      "Arquivo WAV + Stems",
      "Sem tag",
      "Streams ilimitados",
      "Uso exclusivo — sai do catálogo",
    ],
    highlight: false,
  },
];

export default function Licenses() {
  const whatsappNumber = "5511983939696";

  return (
    <section className="licensesSection">
      <div className="container">
        <div className="beatsSectionHeader">
          <span className="subtitle">LICENÇAS</span>
          <h2>ESCOLHA SEU PLANO</h2>
        </div>
        <div className="licensesGrid">
          {licenses.map((license, index) => {
            const message = `Olá! Tenho interesse na ${license.name} (R$ ${license.price})`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={index}
                className={`licenseCard ${license.highlight ? "licenseCardHighlight" : ""}`}
              >
                {license.highlight && (
                  <span className="licenseBadge">MAIS ESCOLHIDA</span>
                )}
                <h3 className="licenseName">{license.name}</h3>
                <div className="licensePrice">R$ {license.price}</div>
                <ul className="licenseFeatures">
                  {license.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="licenseButton"
                >
                  Escolher Plano
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}