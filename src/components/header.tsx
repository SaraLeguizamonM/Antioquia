"use client";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { NewMountainIcon } from "./icons/new-mountain-icon";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between bg-background/80 px-4 shadow-sm backdrop-blur-md md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <NewMountainIcon className="h-6 w-6 text-primary" />
        <span className="font-headline text-lg font-semibold tracking-wider">Antioquia</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link
          href="#about"
          className="hover:text-primary hover:underline"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          prefetch={false}
        >
          Nosotros
        </Link>
        <Link
          href="#cuisine"
          className="hover:text-primary hover:underline"
          onClick={(e) => { e.preventDefault(); scrollToSection('cuisine'); }}
          prefetch={false}
        >
          Gastronomía
        </Link>
        <Link
          href="#myths"
          className="hover:text-primary hover:underline"
          onClick={(e) => { e.preventDefault(); scrollToSection('myths'); }}
          prefetch={false}
        >
          Mitos
        </Link>
        <Link
          href="#symbol"
          className="hover:text-primary hover:underline"
          onClick={(e) => { e.preventDefault(); scrollToSection('symbol'); }}
          prefetch={false}
        >
          Símbolo
        </Link>
        <Link
          href="#location"
          className="hover:text-primary hover:underline"
          onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
          prefetch={false}
        >
          Ubicación
        </Link>
      </nav>
      <button
        onClick={() => scrollToSection('about')}
        className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
      >
        Explorar
      </button>
    </header>
  );
}
