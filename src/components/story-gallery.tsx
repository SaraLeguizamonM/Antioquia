'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { initialUserStories, type Story } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PlusCircle } from 'lucide-react';

export default function StoryGallery() {
  const [stories, setStories] = useState<Story[]>(initialUserStories);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [newStory, setNewStory] = useState({ title: '', author: '', story: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewStory((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStory.title && newStory.author && newStory.story) {
      const storyToAdd: Story = {
        ...newStory,
        image: '',
        aiHint: '',
      };
      setStories((prev) => [storyToAdd, ...prev]);
      setNewStory({ title: '', author: '', story: '' });
      setIsFormOpen(false);
    }
  };

  return (
    <section id="historias" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Galería de Relatos</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            Lee las historias de nuestra comunidad o comparte la tuya.
          </p>
        </div>

        <Dialog>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <CardDescription>por {story.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <p className="text-foreground/70 line-clamp-6">{story.story}</p>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedStory(story)} className="w-full">
                      Leer más
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
            ))}
          </div>

          {selectedStory && !isFormOpen && (
            <DialogContent className="sm:max-w-[625px] bg-card/80 backdrop-blur-lg">
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl text-primary">{selectedStory.title}</DialogTitle>
                <DialogDescription>Un relato por {selectedStory.author}</DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <p className="text-base text-foreground/80 whitespace-pre-wrap">{selectedStory.story}</p>
              </ScrollArea>
            </DialogContent>
          )}
        </Dialog>

        <div className="text-center mt-12">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full group">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  <span>Cuenta tu propia historia</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] bg-card/80 backdrop-blur-lg border-primary/20">
                <form onSubmit={handleSubmitStory}>
                  <DialogHeader>
                    <DialogTitle className="font-headline text-3xl text-primary">Comparte tu Relato</DialogTitle>
                    <DialogDescription>
                      Tu historia pasará a formar parte de nuestra tradición.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Título
                      </Label>
                      <Input id="title" value={newStory.title} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="author" className="text-right">
                        Autor
                      </Label>
                      <Input id="author" value={newStory.author} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                     <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="story" className="text-right pt-2">
                        Relato
                      </Label>
                      <Textarea id="story" value={newStory.story} onChange={handleInputChange} className="col-span-3 min-h-[120px]" required />
                    </div>
                  </div>
                  <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancelar</Button>
                      </DialogClose>
                      <Button type="submit">Publicar Historia</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
}
