"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, ShoppingCart, RotateCcw, RotateCw } from "lucide-react";

export default function BeatCard({ title, genre, bpm, note, price, audioSrc, cover }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

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

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skip = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + seconds), duration);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const whatsappNumber = "5511983939696";
  const message = "Ola! Tenho interesse no beat \"" + title + "\" (" + genre + " - R$ " + price + ")";
  const whatsappLink = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  return (
    <div className="beatCard beatCardHorizontal">
      <div className="beatLeft">
        <div className="beatCover" style={{ backgroundImage: "url(" + cover + ")" }}>
          <audio ref={audioRef} src={audioSrc} />
        </div>

        <div className="beatPlayer">
          <div className="beatPlayerControls">
            <button className="skipButton" onClick={() => skip(-10)}>
              <RotateCcw size={18} />
            </button>
            <button className="playButtonSmall" onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="skipButton" onClick={() => skip(10)}>
              <RotateCw size={18} />
            </button>
          </div>
          <div className="beatPlayerTimeline">
            <span className="beatTime">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="seekBar"
            />
            <span className="beatTime">{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="beatRight">
        <span className="beatGenre">{genre}</span>
        <h3 className="beatTitle">{title}</h3>
        <div className="beatMeta">
          <span>BPM: {bpm}</span>
          <span>NOTA: {note}</span>
        </div>
        <span className="beatPrice">R$ {price}</span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="beatBuyButton">
          <ShoppingCart size={18} />
          Comprar
        </a>
      </div>
    </div>
  );
}