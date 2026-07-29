"use client";
import { useRef, useState } from "react";
import { Play, Pause, ShoppingCart } from "lucide-react";

export default function BeatCard({ title, genre, bpm, note, price, audioSrc, cover }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => setIsPlaying(false);

  const whatsappNumber = "5511983939696";
  const message = `Olá! Tenho interesse no beat "${title}" (${genre} - R$ ${price})`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="beatCard">
      <div
        className="beatCover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <button className="playButton" onClick={togglePlay}>
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>
        <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
      </div>

      <div className="beatInfo">
        <span className="beatGenre">{genre}</span>
        <h3 className="beatTitle">{title}</h3>
        <div className="beatMeta">
          <span>BPM: {bpm}</span>
          <span>NOTA: {note}</span>
        </div>
        <div className="beatFooter">
          <span className="beatPrice">R$ {price}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="beatBuyButton"
          >
            <ShoppingCart size={18} />
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}