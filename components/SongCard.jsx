import React from "react";
import AlbumImage from "./AlbumImage";

const SongCard = async () => {
  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=balen&per_page=20&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "69d8a6e9e4mshba79c66cddd59f8p18914cjsn353f8f3d5e11",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();

  return (
    <>
      {results?.hits.map((items) => (
        <div
          className="h-96 flex flex-col p-8 rounded border group hover:scale-105 transition-transform
     ease-out duration-200"
        >
          <div className="relative max-h-72 flex-1">
            <AlbumImage
              img={items.result.header_image_url}
              name={items?.result?.full_title}
              fill
            />
          </div>

          <div className="font-semibold flex flex-col justify-between mt-4 mb-1">
            <p className="w-44 truncate">Name : {items.result.full_title}</p>
            <p>Artist : {items.result.artist_names}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SongCard;
