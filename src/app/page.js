import Link from "next/link";
import Carousel from "./components/Carousel";
import CardsPage from "./components/card";
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <>
    <Carousel />
    <CardsPage />
    <Footer />
    </>
  );
}