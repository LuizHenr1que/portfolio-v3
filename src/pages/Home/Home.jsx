import { Cases } from "../../sections/Cases";
import { Contact } from "../../sections/Contact";
import { Experience } from "../../sections/Experience";
import { Hero } from "../../sections/Hero";
import { Posts } from "../../sections/Posts";
import { Proof } from "../../sections/Proof";
import { Stack } from "../../sections/Stack";
import { Vertice } from "../../sections/Vertice";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <Vertice />
      <Cases />
      <Posts />
      <Experience />
      <Stack />
      <Contact />
    </main>
  );
}
