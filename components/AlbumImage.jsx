'use client'
import Image from "next/image";
import { useState } from "react";

const AlbumImage = ({img, name, fill}) => {
    const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={img}
          fill
          alt={name}
          class={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={img}
          alt={name}
          width={400}
          height={1000}
          class={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default AlbumImage