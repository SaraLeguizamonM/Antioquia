import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { mythsAndLegends } from "@/lib/data";
import Image from "next/image";

export function Myths() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" id="myths">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Mitos y Leyendas que Viven en las Montañas
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nuestras historias se tejen con seres fantásticos que habitan bosques y ríos, protegiendo la naturaleza y
            enseñando lecciones a quienes se atreven a escuchar.
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {mythsAndLegends.map((myth) => (
              <AccordionItem value={myth.title} key={myth.title}>
                <AccordionTrigger className="font-headline text-lg">{myth.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 md:grid-cols-[150px_1fr]">
                    <Image
                      src={myth.image}
                      width="150"
                      height="150"
                      alt={myth.title}
                      className="h-full w-full rounded-lg object-cover"
                      data-ai-hint={myth.aiHint}
                    />
                    <div className="text-left">
                      <p className="font-bold">{myth.summary}</p>
                      <p className="mt-2 text-muted-foreground">{myth.content}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
