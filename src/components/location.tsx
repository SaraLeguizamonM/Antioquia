"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { HotelIcon } from "./icons/hotel-icon";
import { BikeIcon } from "./icons/bike-icon";

export function Location() {
  return (
    <section id="location" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Encuéntranos
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              El Epicentro: La Pintada
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Descubre el lugar donde la magia sucede. La Pintada es el corazón de nuestra celebración.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="lg" asChild>
                <a href="https://www.google.com/maps/place/La+Pintada,+Antioquia" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Abrir en Google Maps
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg">Recomendar un Lugar</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Comparte tus favoritos</DialogTitle>
                    <DialogDescription>
                      ¿Conoces un lugar increíble en La Pintada? ¡Compártelo con la comunidad!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Lugar
                      </Label>
                      <Input id="name" placeholder="Nombre del lugar" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="recommendation" className="text-right">
                        Recomendación
                      </Label>
                      <Textarea id="recommendation" placeholder="¿Por qué lo recomiendas?" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="type" className="text-right">
                        Categoría
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hospedaje">Hospedaje</SelectItem>
                          <SelectItem value="actividad">Actividad</SelectItem>
                          <SelectItem value="comida">Comida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Enviar recomendación</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/La_Pintada_Antioquia_Colombia.jpg"
            width={600}
            height={400}
            alt="Foto del municipio de La Pintada, Antioquia"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            data-ai-hint="la pintada antioquia"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-center font-headline text-2xl font-bold mb-8">Clima en La Pintada</h3>
          <div className="flex justify-center rounded-xl overflow-hidden border border-border shadow-lg">
            <Image
              src="https://www.weather-forecast.com/locationmaps/La-Pintada-1.10.gif"
              width={600}
              height={465}
              alt="Mapa del clima de La Pintada"
              className="object-cover"
              data-ai-hint="weather map"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-headline text-2xl font-bold mb-8">Recomendaciones de la Comunidad</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 font-headline text-xl font-semibold text-foreground/80">
                <HotelIcon className="h-6 w-6" />
                Dónde Hospedarse
              </h4>
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Real Dinastía</CardTitle>
                  <CardDescription>Recomendado por Carlos V.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Tiene una vista increíble al río Cauca. Muy recomendado.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Finca Hotel La Ponderosa</CardTitle>
                  <CardDescription>Recomendado por Luis F.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Perfecta para ir en familia, muy tranquila.</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 font-headline text-xl font-semibold text-foreground/80">
                <BikeIcon className="h-6 w-6" />
                Qué Hacer
              </h4>
              <Card>
                <CardHeader>
                  <CardTitle>Paseo en Lancha</CardTitle>
                  <CardDescription>Recomendado por Ana G.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>No se pueden perder el paseo en lancha por el río. ¡Una experiencia inolvidable!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
