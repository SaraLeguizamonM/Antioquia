import Link from 'next/link';
import { NewMountainIcon } from '@/components/icons/new-mountain-icon';

export default function Header() {
  const navLinks = [
    { href: '#fiesta', label: 'La Fiesta' },
    { href: '#comida', label: 'Comida' },
    { href: '#simbolos', label: 'Símbolos' },
    { href: '#mitos', label: 'Mitos' },
    { href: '#historias', label: 'Relatos' },
    { href: '#ubicacion', label: 'Ubicación' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <NewMountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">Antioquia</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary/90 transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
