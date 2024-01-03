"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import Dropdown from "@/components/Dropdown";
import {
  headerLeftContent,
  headerRightContent,
  works,
  languages,
  accordion,
} from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen text-[#49DCB1]">
      <Header />
      <header className="py-56">
        <Container>
          <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-light sm:pr-10 md:pr-20 lg:pr-32 md::max-w-[900px] leading-[3.5rem] my-[3.5rem]">
            Hi, I’m James - an aspiring software developer with a passion for
            full stack development.
          </h1>
          <br></br>
        </Container>
      </header>
      <Accordion content={accordion} />
      <Container className="flex gap-10 pt-24 md:gap-20 flex-col md:flex-row font-light">
        <article className="text-2xl md:text-4xl leading-[1.4] md::max-w[900px]">
          <div className="pb-10">
            Throughout my experiences, I have had the opportunity to learn various
            <Dropdown content={languages} title="languages"/>
            use some amazing
            <Dropdown content={languages} title="tools"/>
            and picked up some pretty cool
            <Dropdown content={languages} title="skills"/>
          </div> 
        </article>
        <div className="min-w-[300px] flex flex-col gap-4">
            <List
              gap={10}
              title="certificates"
              content={headerRightContent.experiences}
            />
            </div>
      </Container>
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
