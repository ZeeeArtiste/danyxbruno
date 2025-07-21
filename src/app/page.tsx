import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import SolutionsSlider from '@/components/SolutionsSlider/SolutionsSlider';
import Tabs from '@/components/Tabs/Tabs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Hero />
        </section>
        <LogoSlider />
        <SolutionsSlider />
        <div className="container">
          <Tabs />
        </div>
      </main>
    </>
  );
}
