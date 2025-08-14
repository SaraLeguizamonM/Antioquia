import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { NewMountainIcon } from '@/components/icons/new-mountain-icon';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 mt-16">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <NewMountainIcon className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">Antioquia</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-foreground/70">
              Un proyecto cultural del <span className="font-bold text-primary">INEM José Félix de Restrepo</span>.
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              &copy; {new Date().getFullYear()} Antioquia. Todos los derechos reservados.
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              Creado por Sara Leguizamon
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/INEM_Medellin?ref_src=twsrctfwtwcampembeddedtimelinetwtermprofileINEM_MedellintwgreyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VtYmVkX2NsaWNrYWJpbGl0eV8xMjEwMiI6eyJidWNrZXQiOiJjb250cm9sIiwidmVyc2lvbiI6bnVsbH19&ref_url=httpsinemjose.edu.co" aria-label="Twitter" className="text-foreground/60 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/inem_medellin/" aria-label="Instagram" className="text-foreground/60 hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/inemjoseoficial/" aria-label="Facebook" className="text-foreground/60 hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
