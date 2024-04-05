import React from "react";
import Songcard from "./Songcard";

const Anasayfa = () => {
  const items = [
    {
      id: 1,
      title: "TTD",
      description: "Oluşturan Barış Kayıkçı",
      image:
        "https://i2o.scdn.co/image/ab67706c0000cfa365ad86ef8e776881848aaa5a",
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
      artist: "Weeknd",
    },
    {
      id: 2,
      title: "Fel Rush",
      description: "Oluşturan Barış Kayıkçı",
      image:
        "https://i2o.scdn.co/image/ab67706c0000cfa33a4ac39cec1584a48cca4ed4",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
      artist: "Ezhel",
    },
    {
      id: 3,
      title: "Born To Die-The Paradise Continious",
      description: "Oluşturan Barış Kayıkçı",
      image: "https://picsum.photos/id/237/200/300",
      src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
      artist: "Lana Del Rey",
    },
    {
      id: 4,
      title: "TTD",
      description: "Oluşturan Barış Kayıkçı",
      image:
        "https://i2o.scdn.co/image/ab67706c0000cfa365ad86ef8e776881848aaa5a",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      artist: "Travis Scott",
    },
    {
      id: 5,
      title: "Born To Die-The Paradise Continious",
      description: "Oluşturan Barış Kayıkçı",
      image: "https://picsum.photos/id/237/200/300",
      src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
      artist: "Lana Del Rey",
    },
  ];
  return (
    <div className="grid gap-y-6  ">
      <Songcard title="Çalma Listelerin" more="/seeMore" items={items} />
      <Songcard
        title="En çok dinlediğin mix'ler"
        more="/seeMore"
        items={items}
      />
      <Songcard
        title="En çok dinlediğin mix'ler"
        more="/seeMore"
        items={items}
      />
    </div>
  );
};

export default Anasayfa;
