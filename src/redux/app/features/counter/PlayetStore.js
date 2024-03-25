import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [
      {
        title: "Müzik",
        url: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb",
        color: "bg-pink-500",
      },
      {
        title: "Podcast'ler",
        url: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
        color: "bg-blue-300",
      },
      {
        title: "Canlı Etkinlikler",
        url: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
        color: "bg-yellow-400",
      },
      {
        title: "Senin için Hzirlandı",
        url: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
        color: "bg-red-800",
      },
    ],
  },
  reducers: {},
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;
