
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Cuisine } from '@/components/cuisine';
import { Myths } from '@/components/myths';
import { Symbol } from '@/components/symbol';
import { StoryGallery } from '@/components/story-gallery';
import { Location } from '@/components/location';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Cuisine />
        <Myths />
        <Symbol />
        <StoryGallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
