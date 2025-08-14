import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { culinaryItems } from '@/lib/data';

export default function Cuisine() {
  return (
    <section id="comida" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Sabores de la Tierra</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            La gastronomía antioqueña es un reflejo de nuestra historia y geografía. Desliza para descubrir las recetas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culinaryItems.map((item) => (
            <Card key={item.name} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                        data-ai-hint={item.aiHint}
                      />
                    </div>
                     <CardContent className="p-6">
                      <h3 className="font-headline text-2xl text-primary">{item.name}</h3>
                      <p className="mt-2 text-foreground/70 h-24">{item.description}</p>
                    </CardContent>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-6 bg-card h-full">
                      <h4 className="font-headline text-xl text-accent mb-2">Receta</h4>
                      <div className="text-sm text-foreground/80 space-y-3 h-[280px] overflow-y-auto pr-2">
                        {item.recipe.split('\n\n').map((paragraph, pIndex) => (
                          <div key={pIndex}>
                            <h5 className="font-bold mb-1">{paragraph.startsWith('Ingredientes:') || paragraph.startsWith('Preparación:') ? paragraph.substring(0, paragraph.indexOf(':') + 1) : ''}</h5>
                            <p>
                              {paragraph.startsWith('Ingredientes:') || paragraph.startsWith('Preparación:') ? paragraph.substring(paragraph.indexOf(':') + 1).trim() : paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
