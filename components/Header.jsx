'use client'
import Link from "next/link";
import { useState } from "react";
import {IoIosSearch} from 'react-icons/io'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 shadow">
        <Link href="/">
          <p className="text-2xl font-bold">MusicWorld.</p>
        </Link>

        <div className="flex items-center space-x-3 text-sm">
          <input 
          onChange={(e) =>setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search"
          className="bg-transparent outline-none text-black pr-5 pl-5 md:p-0"
          type="text" />
          <button>
            <IoIosSearch className="text-black text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
