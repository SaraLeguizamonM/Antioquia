'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function Symbol() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="symbol">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-6 h-[400px]">
                    <div className="md:w-1/2 flex justify-center">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy6CgegOH3w7FYoUjHE_igvbDTysN7TLwzg&s"
                        width="250"
                        height="300"
                        alt="Escudo de Antioquia"
                        className="object-contain"
                        data-ai-hint="coat of arms"
                      />
                    </div>
                    <div className="md:w-1/2 space-y-2 text-center md:text-left">
                      <h3 className="font-headline text-2xl font-bold">Nuestro Escudo</h3>
                      <p className="text-muted-foreground">
                        El escudo de Antioquia es un símbolo de nuestra identidad, riqueza y valores. Adoptado en 1812,
                        representa la soberanía y la herencia de nuestro pueblo.
                      </p>
                      <p className="text-muted-foreground">
                        En él se observa una matrona sentada entre el cerro de oro y el de plata, simbolizando la
                        riqueza minera. A sus pies, el río Cauca. La palmera en la parte superior representa el
                        trópico y la libertad. Cada elemento narra una parte de la historia de Antioquia.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-6 text-center h-[400px] bg-secondary/20">
                    <h3 className="font-headline text-2xl font-bold">El Alma de Antioquia</h3>
                    <div className="space-y-4 text-lg text-foreground/80 italic">
                      <p>&quot;La pujanza de nuestra gente es la fuerza que mueve montañas.&quot; <br />- Dicho Popular</p>
                      <p>&quot;En cada arepa, un pedazo de nuestro corazón; en cada café, el alma de nuestra tierra.&quot; <br />- Tradición Paisa</p>
                      <p>&quot;Ser antioqueño no es nacer en un lugar, es llevar la herencia de los arrieros en el alma.&quot; <br />- Reflexión Cultural</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
