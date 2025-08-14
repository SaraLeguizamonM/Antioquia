'use client';
import { useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Cuisine from '@/components/cuisine';
import Symbol from '@/components/symbol';
import Location from '@/components/location';
import Myths from '@/components/myths';
import StoryGallery from '@/components/story-gallery';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Cuisine />
        <Symbol />
        <Myths />
        <StoryGallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
