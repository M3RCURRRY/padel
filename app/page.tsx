import Image from "next/image";
import Header from "./wigdets/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import UspSection from "./sections/UspSection/UspSection";
import PriceSection from "./sections/PriceSection/PriceSection";
import CourtSection from "./sections/CourtSection/CourtSection";
import MarcosSection from "./sections/MarcosSection/MarcosSection";
import NewbieSection from "./sections/NewbieSection/NewbieSection";
import CarouselSection from "./sections/CarouselSection/CarouselSection";
import AddressSection from "./sections/AddressSection/AddressSection";
import Footer from "./wigdets/Footer/Footer";
import BiznezSection from "./sections/BiznezSection/BiznezSection";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-white font-sans">
      <main className="w-full">
        <Header />
        <HeroSection />
        <UspSection />
        <PriceSection />
        <CourtSection />
        <MarcosSection />
        <NewbieSection />
        <CarouselSection />
        <AddressSection />
        <BiznezSection />
        <Footer />
      </main>
    </div>
  );
}
