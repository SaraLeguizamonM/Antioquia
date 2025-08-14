import Image from 'next/image';

export default function About() {
  return (
    <section id="fiesta" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">
              Corazón de la Tradición
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              La Fiesta de la Antioqueñidad es una celebración vibrante que rinde homenaje a la herencia cultural de nuestra región. Conmemoramos las costumbres, la música, la gastronomía y la calidez de nuestra gente.
            </p>
            <p className="mt-4 text-foreground/70">
              En La Pintada, esta fiesta adquiere un color especial. Sus paisajes se convierten en el escenario perfecto para vivir de cerca el folclor paisa, con eventos que unen a la comunidad y a visitantes en un solo sentir. Este proyecto, creado por el INEM José Félix de Restrepo, busca capturar y compartir esa esencia única.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://www.upb.edu.co/es/colegio/imagenes/img-antioque%C3%B1idad-preescolar-col-1464183964377.jpg"
              alt="Celebración de la Antioqueñidad"
              width={600}
              height={700}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="colombian festival children"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
