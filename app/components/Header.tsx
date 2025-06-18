"use client";

import { useState } from "react";

export default function Header() {
   const [search, setSearch] = useState("");
   function HandleInput(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      setSearch(e.target.value);
      console.log(search);
   }
   function HandleClick(e: React.MouseEvent<HTMLButtonElement>) {}
   return (
      <section>
         <div className=" justify-center mx-auto m-5 border border-blue-400 p-2 rounded-2xl w-150">
            <input
               className="focus:outline-none w-130 text-sm"
               value={search}
               title="SearchBar"
               onChange={(e) => HandleInput(e)}
            />
            <button
               onClick={HandleClick}
               className="float-right border rounded m-0 pr-1 pl-1"
            >
               {" "}
               Add{" "}
            </button>
         </div>
      </section>
   );
}
