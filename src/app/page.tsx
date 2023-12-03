import Depoimentos from "@/components/depoimentos/Depoimentos";
import { Lances } from "@/components/Lances";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-4xl w-full m-auto">
        <Carousel />
        <Lances />
      </main>
      <Depoimentos />
      <Footer />
    </>
  );
}
