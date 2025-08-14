'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-4rem)] w-full">
      <Image
        src="https://www.antioquiacritica.com/wp-content/uploads/2021/08/maxresdefault.jpg"
        alt="Paisaje de Antioquia"
        fill
        className="object-cover opacity-20"
        data-ai-hint="antioquia flag"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tight text-primary">
          La Fiesta de la Antioqueñidad
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-foreground/80">
          Un viaje al corazón de nuestras tradiciones. Celebra con nosotros la riqueza cultural de Antioquia, desde sus sabores hasta sus leyendas.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full group">
          <Link href="#fiesta">
            <span>Descubre Más</span>
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
