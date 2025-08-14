import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { culinaryItems } from "@/lib/data";
import Image from "next/image";

export function Cuisine() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="cuisine">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium">
              Sabores que Enamoran
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Un Festín para el Paladar</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La gastronomía antioqueña es un reflejo de su tierra: generosa, diversa y llena de carácter. Cada plato
              cuenta una historia, una tradición que pasa de generación en generación.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {culinaryItems.map((item) => (
            <Card key={item.name}>
              <CardContent className="p-0">
                <Image
                  src={item.image}
                  width="300"
                  height="200"
                  alt={item.name}
                  className="h-48 w-full rounded-t-lg object-cover"
                  data-ai-hint={item.aiHint}
                />
                <div className="p-4">
                  <CardTitle className="text-xl font-headline">{item.name}</CardTitle>
                  <CardDescription className="mt-2 text-base">{item.description}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
