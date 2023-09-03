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
          className="w-full h-[434px] object-cover absolute inset-0 -z-10"
        />
      <HeroCTA />
      <Testimonials />
      <Projects />
    </main>
  );
}
