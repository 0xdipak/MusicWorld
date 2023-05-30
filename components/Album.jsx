import Link from 'next/link'
import React from 'react'
import AlbumImage from './AlbumImage'

const Album = ({items}) => {
  return (
    <Link
      className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform
     ease-out duration-200"
      href={`/albumdetail/${items.id}`}
    >
      <div className="relative max-h-72 flex-1">
        <AlbumImage img={items.cover_art_thumbnail_url} name={items.name} fill />
      </div>

      <div className="font-semibold flex flex-col justify-between mt-4 mb-1">
        <p className="w-44 truncate">Name : {items.name}</p>
        <p>Artist : {items.artist.name}</p>
      </div>
    </Link>
  );
}

export default Album