import Navbar from "../../components/Navbar";
import Licenses from "../../components/Licenses";

const terms = [
  {
    name: "Licença Básica",
    rules: [
      "Uso em faixas para distribuição digital (streaming, YouTube, redes sociais)",
      "Sem uso comercial em rádio ou TV",
      "Sem venda física do produto",
      "Produtor mantém os direitos sobre o beat",
      "Crédito ao produtor obrigatório",
    ],
  },
  {
    name: "Licença Premium",
    rules: [
      "Mesmo uso da Básica, com qualidade de estúdio (WAV)",
      "Permite lançamento em maior escala (mais plays)",
      "Ainda não exclusiva — o beat continua no catálogo",
      "Crédito ao produtor obrigatório",
    ],
  },
  {
    name: "Licença Exclusiva",
    rules: [
      "Direitos totais de uso comercial irrestrito",
      "Beat removido do catálogo após a compra",
      "Comprador pode revender ou usar como quiser",
      "Crédito ao produtor opcional",
    ],
  },
];

const faq = [
  {
    question: "Posso usar o beat em qualquer plataforma?",
    answer:
      "Sim, respeitando o limite de streams do plano escolhido (Básica ou Premium).",
  },
  {
    question: "Preciso dar crédito ao produtor?",
    answer: "Sim, nas licenças não-exclusivas (Básica e Premium).",
  },
  {
    question: "Posso fazer upgrade de licença depois?",
    answer: "Sim, entrando em contato diretamente pelo WhatsApp.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Combinado diretamente via WhatsApp no momento da compra.",
  },
];

export default function LicensesPage() {
  return (
    <>
      <Navbar />
      <section className="licensesPageHero">
        <div className="container">
          <span className="subtitle">LICENÇAS DE USO</span>
          <h1>ENTENDA CADA PLANO</h1>
          <p>
            Conheça em detalhes o que cada licença permite antes de escolher
            o plano ideal para o seu projeto.
          </p>
        </div>
      </section>

      <Licenses />

      <section className="termsSection">
        <div className="container">
          <div className="beatsSectionHeader">
            <span className="subtitle">TERMOS DE USO</span>
            <h2>O QUE CADA LICENÇA PERMITE</h2>
          </div>
          <div className="termsGrid">
            {terms.map((term, index) => (
              <div key={index} className="termsCard">
                <h3>{term.name}</h3>
                <ul>
                  {term.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container">
          <div className="beatsSectionHeader">
            <span className="subtitle">DÚVIDAS</span>
            <h2>PERGUNTAS FREQUENTES</h2>
          </div>
          <div className="faqList">
            {faq.map((item, index) => (
              <div key={index} className="faqItem">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}