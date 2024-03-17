import Link from "next/link";
import React from "react";
import Menu from "@/components/header/Menu";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Amazon
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
