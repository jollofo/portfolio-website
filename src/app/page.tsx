"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import GridList from "@/components/GridList";
import {
  headerRightContent,
  facts,
  projects,
  education,
  work,
  technologies,
} from "@/data";
import Notepad from "@/components/Notepad";

export default function Home() {
  return (
    <main className="min-h-screen text-black">
      <Header />
      <header className="py-56">
        <Container>
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl font-light md::max-w-[900px] leading-[3.5rem] mt-20 ">
            Hi, {"I'm"} James
          </h1>
          <h2 className="text-3xl pt-10 pb-20 pr-20">
            An aspiring software engineer interested in Cloud Infrastructure and
            Human-Computer Interaction.
          </h2>
        </Container>
      </header>
      <Card title={"Education"} cols={2} content={education} />
      <GridList content={technologies} />
      {/* <section className="grid grid-flow-col place-content-center gap-1">
        <Notepad color={"blue"}/>
        <Notepad color={"green"}/>
        <Notepad color={"red"}/>
      </section> */}
      <Card title={"Work"} cols={2} content={work} />
      <section className="pt-48">
        <Container className="text-black !max-w-[1400px] px-4 flex flex-col gap-20 md:gap-32">
          <h1 className="text-3xl md:text-5xl lg:text-7xl">Projects —</h1>
          {projects.map((item, i) => (
            <Slider key={i} title={item.title} data={item.data} />
          ))}
        </Container>
      </section>
      <section className="py-4"></section>
    </main>
  );
}
