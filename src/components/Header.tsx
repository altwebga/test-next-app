import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-24 bg-slate-900 px-5">
      <p className="text-white">Logo</p>
      <Nav/>
      <p className="text-white">Contact</p>
    </header>
  );
}

export default Header;
