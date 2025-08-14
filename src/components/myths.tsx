'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { mythsAndLegends } from '@/lib/data';
import { useState } from 'react';

function MythCard({ myth }: { myth: typeof mythsAndLegends[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card/80 backdrop-blur-sm cursor-pointer h-full">
          <CardHeader>
            <CardTitle>{myth.title}</CardTitle>
          </CardHeader>
          <div className="relative h-64 w-full">
            <Image
              src={myth.image}
              alt={myth.title}
              fill
              className="object-cover"
              data-ai-hint={myth.aiHint}
            />
          </div>
          <CardContent className="flex-grow pt-6">
            <p className="text-foreground/70 line-clamp-4">{myth.summary}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-card/80 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary">{myth.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="relative h-80 w-full mb-4 rounded-lg overflow-hidden">
            <Image
              src={myth.image}
              alt={myth.title}
              fill
              className="object-cover"
              data-ai-hint={myth.aiHint}
            />
          </div>
          <p className="text-base text-foreground/80 whitespace-pre-wrap">{myth.content}</p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default function Myths() {
  return (
    <section id="mitos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Mitos y Leyendas</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            Historias que han pasado de generación en generación, llenas de misterio y tradición oral.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mythsAndLegends.map((myth, index) => (
            <MythCard key={index} myth={myth} />
          ))}
        </div>
      </div>
    </section>
  );
}
