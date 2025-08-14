import { NewMountainIcon } from "./icons/new-mountain-icon";

export function Footer() {
  return (
    <footer className="w-full bg-muted py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <NewMountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Antioquia</span>
        </div>
        <p className="max-w-md text-muted-foreground">
          Un proyecto cultural del INEM José Félix de Restrepo.
        </p>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          <p>© 2025 Antioquia. Todos los derechos reservados.</p>
          <p>Creado por Sara Leguizamon</p>
        </div>
      </div>
    </footer>
  );
}
