import Image from "next/image";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] w-full" id="home">
      <Image
        src="https://www.antioquiacritica.com/wp-content/uploads/2021/08/maxresdefault.jpg"
        alt="Bandera de Antioquia ondeando"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="flag landscape"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">La Fiesta de la Antioqueñidad</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Un viaje al corazón de nuestras tradiciones. Celebra con nosotros la riqueza cultural de Antioquia, desde sus
          sabores hasta sus leyendas.
        </p>
        <button
          onClick={scrollToAbout}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Descubre Más
        </button>
      </div>
    </section>
  );
}
