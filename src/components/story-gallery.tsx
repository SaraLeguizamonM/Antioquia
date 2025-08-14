'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { initialUserStories, Story } from "@/lib/data";
import Image from "next/image";

export function StoryGallery() {
  const [stories, setStories] = useState<Story[]>(initialUserStories);
  const [newStory, setNewStory] = useState({ title: '', author: '', story: '' });
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewStory(prev => ({ ...prev, [name]: value }));
  };

  const addStory = () => {
    if (newStory.title && newStory.author && newStory.story) {
      const storyToAdd: Story = {
        ...newStory,
        image: `https://placehold.co/400x300.png?text=${encodeURIComponent(newStory.title)}`,
        aiHint: 'story abstract',
      };
      setStories(prev => [storyToAdd, ...prev]);
      setNewStory({ title: '', author: '', story: '' });
      setDialogOpen(false);
    }
  };


  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" id="stories">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Historias de Nuestra Gente</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            La historia de Antioquia la escribimos todos, todos los días. Aquí, compartimos los relatos que nos unen
            y nos definen.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline">{story.title}</CardTitle>
                <CardDescription>por {story.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-4">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">Comparte Tu Historia</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Añade tu relato</DialogTitle>
                <DialogDescription>
                  Tu historia es parte de la nuestra. Compártela con la comunidad.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  id="title"
                  name="title"
                  placeholder="Título de tu historia"
                  value={newStory.title}
                  onChange={handleInputChange}
                />
                <Input
                  id="author"
                  name="author"
                  placeholder="Tu nombre"
                  value={newStory.author}
                  onChange={handleInputChange}
                />
                <Textarea
                  id="story"
                  name="story"
                  placeholder="Escribe tu historia aquí..."
                  value={newStory.story}
                  onChange={handleInputChange}
                  rows={6}
                />
              </div>
              <CardFooter>
                <Button onClick={addStory} className="w-full">Publicar Historia</Button>
              </CardFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
}
