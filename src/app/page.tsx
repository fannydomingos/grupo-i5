import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import Brands from '@/components/sections/Brands';
import Stats from '@/components/sections/Stats';
import Timeline from '@/components/sections/Timeline';
import Closing from '@/components/sections/Closing';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Brands />
        <Stats />
        <Timeline />
      </main>
      <Closing />
    </>
  );
}
