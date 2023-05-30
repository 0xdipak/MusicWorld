import { IoIosSearch } from "react-icons/io";
import SongCard from "./SongCard";

const SearchSong = () => {

  return (
    <div className="max-w-[1240px] m-auto mt-36 flex flex-col items-center">
      <div className="flex items-center space-x-3 text-sm mb-16">
        <input
          type="text"
          placeholder="search songs by artist"
          className="bg-transparent outline-none text-black pr-5 pl-5 md:p-0"
        />
        <button>
          <IoIosSearch className="text-black text-xl" />
        </button>
      </div>

      <div
        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4"
      >
        <SongCard />
      </div>
    </div>
  );
};

export default SearchSong;
