'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator';

const quotes = [
    {
        quote: "La pujanza de nuestra gente es la fuerza que mueve montañas.",
        author: "Dicho Popular"
    },
    {
        quote: "En cada arepa, un pedazo de nuestro corazón; en cada café, el alma de nuestra tierra.",
        author: "Tradición Paisa"
    },
    {
        quote: "Ser antioqueño no es nacer en un lugar, es llevar la herencia de los arrieros en el alma.",
        author: "Reflexión Cultural"
    }
];

export default function Symbol() {
  return (
    <section id="simbolos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
          <Carousel 
            className="w-full max-w-3xl mx-auto p-4 rounded-2xl shadow-[0_0_25px_5px_rgba(var(--primary),0.1)]"
            opts={{ loop: true }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center items-center h-[400px]">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy6CgegOH3w7FYoUjHE_igvbDTysN7TLwzg&s"
                      alt="Escudo de Antioquia"
                      width={400}
                      height={400}
                      className="mix-blend-multiply drop-shadow-[0_5px_15px_rgba(255,215,0,0.2)] object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-headline text-4xl md:text-5xl text-primary">
                      Nuestro Escudo
                    </h2>
                    <p className="mt-4 text-lg text-foreground/80">
                      El escudo de Antioquia es un símbolo de nuestra identidad, riqueza y valores. Adoptado en 1812, representa la soberanía y la herencia de nuestro pueblo.
                    </p>
                    <p className="mt-4 text-foreground/70">
                      En él se observa una matrona sentada entre el cerro de oro y el de plata, simbolizando la riqueza minera. A sus pies, el río Cauca. La palmera en la parte superior representa el trópico y la libertad. Cada elemento narra una parte de la historia de Antioquia.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center text-center p-8 h-full min-h-[400px]">
                   <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">
                      El Alma de Antioquia
                    </h2>
                    <div className="space-y-8">
                        {quotes.map((item, index) => (
                            <div key={index}>
                                <blockquote className="text-xl md:text-2xl italic text-foreground/80">
                                    "{item.quote}"
                                </blockquote>
                                <p className="mt-2 text-primary/80 font-bold">- {item.author}</p>
                                {index < quotes.length - 1 && <Separator className="my-6 w-1/4 mx-auto" />}
                            </div>
                        ))}
                    </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
      </div>
    </section>
  );
}
