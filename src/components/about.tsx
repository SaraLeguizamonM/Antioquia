import Image from "next/image";

export function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Nuestra Esencia
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              El Orgullo de Ser Antioqueño
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La cultura antioqueña es un vibrante tapiz tejido con hilos de tradición, innovación y una inquebrantable
              pujanza. Desde las montañas cafeteras hasta la vibrante Medellín, nuestra identidad se forja en la
              calidez de nuestra gente, el sabor de nuestra gastronomía y la riqueza de nuestra historia.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Somos herederos de arrieros, emprendedores por naturaleza y soñadores que convierten las ideas en
              realidades. Esta es una invitación a explorar el alma de Antioquia.
            </p>
          </div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Jard%C3%ADn_-_Antioquia.jpg"
            width="600"
            height="400"
            alt="Paisaje cafetero de Antioquia"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            data-ai-hint="coffee landscape"
          />
        </div>
      </div>
    </section>
  );
}