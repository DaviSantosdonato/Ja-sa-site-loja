import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Categories } from "@/components/sections/Categories";
import { MovingGallery } from "@/components/sections/MovingGallery";
import { Family } from "@/components/sections/Family";
import { History } from "@/components/sections/History";
import { Contact } from "@/components/sections/Contact";
import { MotionDirector } from "@/components/motion/MotionDirector";
import { headers } from "next/headers";

export default async function Home() {
  const userAgent = (await headers()).get("user-agent") ?? "";
  const mobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero enhanced={!mobileDevice} />
        <Manifesto />
        <Categories />
        <MovingGallery />
        <Family />
        <History />
        <Contact />
      </main>
      <Footer />
      {mobileDevice ? null : <MotionDirector />}
    </>
  );
}
