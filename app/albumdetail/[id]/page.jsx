
import AlbumImage from "@/components/AlbumImage";
import Image from "next/image";
import { notFound } from "next/navigation";

const AlbumPage = async ({ params: { id } }) => {
  try {
    const url =
      `https://genius-song-lyrics1.p.rapidapi.com/album/details/?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "69d8a6e9e4mshba79c66cddd59f8p18914cjsn353f8f3d5e11",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const albumDetails = await response.json();
    const albumDetail = albumDetails.album;

    return (
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4
      mt-48 pb-10"
      >
        <AlbumImage
          img={albumDetail.cover_art_url}
          name={albumDetail.full_title}
        />
        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Name : {albumDetail.name}
            </h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
              Artist : {albumDetail.artist.name}
            </h2>
            <h2>Release Date : {albumDetail.release_date} </h2>
          </div>
          <div className="pt-8">
            <p className="text-xs md:text-sm">
              Description : {albumDetail.description_preview}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default AlbumPage;
