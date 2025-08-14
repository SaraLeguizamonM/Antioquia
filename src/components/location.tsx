'use client';
import Image from 'next/image';
import { MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import Link from 'next/link';
import { HotelIcon } from '@/components/icons/hotel-icon';
import { BikeIcon } from '@/components/icons/bike-icon';
import { Hotel, Bike } from 'lucide-react';

interface Recommendation {
  author: string;
  avatar: string;
  text: string;
  type: 'stay' | 'do';
}

const initialRecommendations: Recommendation[] = [
    { author: 'Carlos V.', avatar: 'https://placehold.co/40x40.png', text: 'El Hotel Real Dinastía tiene una vista increíble al río Cauca. Muy recomendado.', type: 'stay' },
    { author: 'Ana G.', avatar: 'https://placehold.co/40x40.png', text: 'No se pueden perder el paseo en lancha por el río. ¡Una experiencia inolvidable!', type: 'do' },
    { author: 'Luis F.', avatar: 'https://placehold.co/40x40.png', text: 'La Finca Hotel La Ponderosa es perfecta para ir en familia, muy tranquila.', type: 'stay' },
];


export default function Location() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations);
  const [newRecommendation, setNewRecommendation] = useState({ author: '', text: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewRecommendation(prev => ({ ...prev, [id]: value }));
  };

  const handleAddRecommendation = (type: 'stay' | 'do') => {
    if (newRecommendation.author && newRecommendation.text) {
      const recommendationToAdd: Recommendation = {
        ...newRecommendation,
        avatar: `https://i.pravatar.cc/40?u=${newRecommendation.author}`,
        type: type
      };
      setRecommendations(prev => [recommendationToAdd, ...prev]);
      setNewRecommendation({ author: '', text: '' });
    }
  };


  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">El Epicentro: La Pintada</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            Descubre el lugar donde la magia sucede. La Pintada es el corazón de nuestra celebración.
          </p>
        </div>
        <Link href="https://maps.app.goo.gl/dRVeVrg9WRef5D9k7" target="_blank" rel="noopener noreferrer" className="block relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-16 group">
          <Image
            src="https://www.weather-forecast.com/locationmaps/La-Pintada-1.10.gif"
            alt="Mapa de Antioquia"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            data-ai-hint="antioquia map"
          />
           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <MapPin className="h-16 w-16 text-primary animate-bounce" fill="hsl(var(--primary))" />
            <span className="mt-2 bg-primary text-primary-foreground font-bold py-1 px-3 rounded-full">
              La Pintada
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-background/80 p-4 rounded-lg flex items-center gap-2">
            <h3 className="font-bold text-primary">Abrir en Google Maps</h3>
            <ExternalLink className="h-5 w-5 text-primary"/>
          </div>
        </Link>

        <div className="my-16">
            <div className="text-center mb-12">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">Recomendaciones de la Comunidad</h3>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
                    ¿Has visitado La Pintada? ¡Comparte tus lugares favoritos con nosotros!
                </p>
            </div>

             <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="text-accent" />
                        <span>Deja tu recomendación</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input id="author" placeholder="Tu nombre" value={newRecommendation.author} onChange={handleInputChange} />
                    <Textarea id="text" placeholder="Escribe tu recomendación aquí..." value={newRecommendation.text} onChange={handleInputChange} />
                    <div className="flex gap-4">
                        <Button onClick={() => handleAddRecommendation('stay')}>
                            <Hotel className="mr-2 h-4 w-4" /> Recomendar Hospedaje
                        </Button>
                        <Button onClick={() => handleAddRecommendation('do')} variant="secondary">
                            <Bike className="mr-2 h-4 w-4" /> Recomendar Actividad
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-headline text-2xl text-foreground/80 mb-4 flex items-center gap-2"><HotelIcon className="h-6 w-6" /> Dónde Hospedarse</h4>
                    <div className="space-y-4">
                        {recommendations.filter(r => r.type === 'stay').map((rec, index) => (
                            <Card key={index} className="bg-card/50">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={rec.avatar} alt={rec.author} />
                                            <AvatarFallback>{rec.author.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold">{rec.author}</p>
                                            <p className="text-foreground/80">{rec.text}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                 <div>
                    <h4 className="font-headline text-2xl text-foreground/80 mb-4 flex items-center gap-2"><BikeIcon className="h-6 w-6" /> Qué Hacer</h4>
                     <div className="space-y-4">
                        {recommendations.filter(r => r.type === 'do').map((rec, index) => (
                             <Card key={index} className="bg-card/50">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={rec.avatar} alt={rec.author} />
                                            <AvatarFallback>{rec.author.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold">{rec.author}</p>
                                            <p className="text-foreground/80">{rec.text}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
