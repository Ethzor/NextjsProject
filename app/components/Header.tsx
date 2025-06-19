"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
   const [searchTerm, setSearchTerm] = useState("");
   const router = useRouter();

   const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();

      if (searchTerm.trim()) {
         router.push(`/todos/${searchTerm.trim()}`);
      }
   };

   return (
      <header className="flex justify-between items-center p-4 bg-gray-100 w-full shadow-sm">
         <div className="font-bold text-xl">Your Logo</div>

         <form onSubmit={handleSearch} className="flex gap-2">
            <input
               type="text"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder="Search for a todo"
               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
            />
            <button
               type="submit"
               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               Go
            </button>
         </form>
      </header>
   );
}
