import Navbar from "../../components/Navbar";
import { MessageCircle, AtSign, Mail } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "5511983939696";
  const whatsappLink = "https://wa.me/" + whatsappNumber;

  return (
    <>
      <Navbar />

      <section className="contactHero">
        <div className="contactHeroOverlay"></div>
        <div className="container contactHeroContent">
          <span className="subtitle">FALE CONOSCO</span>
          <h1>VAMOS CRIAR<br /><span>ALGO JUNTOS</span></h1>
          <p>
            Tem uma ideia, quer um beat exclusivo ou negociar uma licenca?
            Chama a gente agora mesmo.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contactHeroButton">
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <section className="contactCardsSection">
        <div className="container">
          <div className="contactGrid">

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contactCard">
              <div className="contactCardIcon">
                <MessageCircle size={26} />
              </div>
              <h3>WhatsApp</h3>
              <p>Resposta em minutos, direto no chat</p>
              <span className="contactValue">(11) 98393-9696</span>
            </a>

            <a href="https://www.instagram.com/djmamedes" target="_blank" rel="noopener noreferrer" className="contactCard">
              <div className="contactCardIcon">
                <AtSign size={26} />
              </div>
              <h3>Instagram</h3>
              <p>Acompanhe bastidores e lancamentos</p>
              <span className="contactValue">@djmamedes</span>
            </a>

            <a href="mailto:djmamedesbeats@gmail.com" className="contactCard">
              <div className="contactCardIcon">
                <Mail size={26} />
              </div>
              <h3>E-mail</h3>
              <p>Para propostas comerciais e parcerias</p>
              <span className="contactValue">djmamedesbeats@gmail.com</span>
            </a>

          </div>
        </div>
      </section>
    </>
  );
}