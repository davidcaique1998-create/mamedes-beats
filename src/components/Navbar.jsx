"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <span className="logoWhite">MAMEDES</span>
          <span className="logoBlue">BEATS</span>
        </Link>

        <nav>
          <Link href="/beats">Beats</Link>
          <Link href="/licenses">Licenças</Link>
          <Link href="/exclusive">Exclusivos</Link>
          <Link href="/contact">Contato</Link>
        </nav>

        
      </div>
    </header>
  );
}