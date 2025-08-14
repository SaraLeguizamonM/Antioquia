import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Página No Encontrada</h1>
      <p className="mt-4 text-lg">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Volver al Inicio
      </Link>
    </div>
  );
}
