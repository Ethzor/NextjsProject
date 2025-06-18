import React from "react";
import Nav from "./components/Nav";
import "./globals.css";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="overflow-y-auto">
            <Nav />
            {children}
         </body>
      </html>
   );
}
