import Album from "@/components/Album";

export default async function Home() {
  const url =
    "https://genius-song-lyrics1.p.rapidapi.com/chart/albums/?time_period=all_time&per_page=20&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "69d8a6e9e4mshba79c66cddd59f8p18914cjsn353f8f3d5e11",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

    const response = await fetch(url, options);
    const result = await response.json();
    

  return (
    <main className="max-w-[1240px] m-auto mt-32">
      <section className="flex flex-col space-y-12 pb-40 p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          TRENDING OF THE DAY
        </h1>

        <div
          className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4"
        >
          {
            result.chart_items.map((items) => (
              <Album key={items.id} items={items.item} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
