import ContactForm from "@/components/contactForm";
import Hero from "@/components/hero";
import { HeroCTA } from "@/components/heroCTA";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        src="/hero_background.jpg"
        width={1920}
        height={1080}
        alt="Pine wood panels background"
        className="w-full h-[450px] object-cover absolute inset-0 -z-10 md:h-[900px]"
      />
      <Hero />
      <Testimonials />
      <Projects />
      <div className="py-16 sm:container lg:hidden">
        <ContactForm />
      </div>
    </main>
  );
}
