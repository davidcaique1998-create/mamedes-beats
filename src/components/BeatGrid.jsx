import BeatCard from "./BeatCard";

const beats = [
  {
    title: "Lambo Preta",
    genre: "FUNK",
    bpm: 130,
    note: "Gm",
    price: "100,00",
    audioSrc: "/beats/lambo-preta.wav",cover: "/beats/lambo-preta-cover.png",
  },
  {
    title: "Praise The Lord",cover: "/beats/praise-the-lord-cover.png",
    genre: "TRAP",
    bpm: 160,
    note: "Bm",
    price: "100,00",
    audioSrc: "/beats/praise-the-lord.wav",
  },
  {
    title: "Longe de Magnata",
    genre: "FUNK",
    bpm: 130,
    note: "Am",
    price: "100,00",
    audioSrc: "/beats/longe-de-magnata.wav",cover: "/beats/longe-de-magnata-cover.png",
  },
];

export default function BeatGrid() {
  return (
    <section className="beatsSection">
      <div className="container">
        <div className="beatsSectionHeader">
          <span className="subtitle">CATÁLOGO</span>
          <h2>BEATS EM DESTAQUE</h2>
        </div>
        <div className="beatsGrid">
          {beats.map((beat, index) => (
            <BeatCard key={index} {...beat} />
          ))}
        </div>
      </div>
    </section>
  );
}