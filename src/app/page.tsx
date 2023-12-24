"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import {
  headerLeftContent,
  headerRightContent,
  works,
  uofr,
  ala,
  languages,
} from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen text-[#49DCB1]">
      <Header />
      <header className="py-56">
        <Container>
          <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-light sm:pr-10 md:pr-20 lg:pr-32 md::max-w-[900px] leading-[3.5rem] my-[3.5rem]">
            Hi, I’m James - an aspiring software developer with a passion for
            full stack development.<br></br>Welcome to my page.
          </h1>
          <br></br>
        </Container>
      </header>
      <Accordion />
      <section className="py-20">
        <Container className="text-[#DC4974] !max-w-[1400px] px-4 flex flex-col gap-20 md:gap-32">
          <h1 className="text-[#49DCB1] text-3xl md:text-5xl lg:text-7xl">
            Projects —
          </h1>
          {works.map((work, i) => (
            <Slider key={i} title={work.title} data={work.data} />
          ))}
        </Container>
      </section>
    </main>
  );
}
