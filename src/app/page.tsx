"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import {
  headerRightContent,
  facts,
  projects,
  education,
  work,
  technologies,
} from "@/data";
import GridList from "@/components/GridList";

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
            An aspiring software engineer interested in computer vision and
            frontend development.
          </h2>
        </Container>
      </header>
      <Card title={"Education"} cols={2} content={education} />
      <GridList content={technologies} />
      <Card title={"Work"} cols={2} content={work} />
      <section className="pt-48">
        <Container className="text-black !max-w-[1400px] px-4 flex flex-col gap-20 md:gap-32">
          <h1 className="text-3xl md:text-5xl lg:text-7xl">Projects —</h1>
          {projects.map((item, i) => (
            <Slider key={i} title={item.title} data={item.data} />
          ))}
        </Container>
      </section>
      <section className="mt-36 py-36 bg-white">
        <Container className="flex gap-10 md:gap-20 flex-col md:flex-row font-light">
          <article className="text-2x md:text-4xl leading-[1.4] md::max-w[900px]">
            <p className="pb-10">
              I often struggle to introduce myself without mentioning work or
              school.
            </p>
            <p className="pb-10">
              But now that those are out of the way, we can end on some {"fun"}
              <Dropdown title="facts" content={facts} gap={10} />
              about me!
            </p>
            <p className="pb-10">
              Thats my website. Thank you for checking it out!
            </p>
          </article>

          <div className="text-black min-w-[300px] flex flex-col gap-4">
            <List
              gap={10}
              title="Certificates —————————"
              content={headerRightContent.certifcates}
            />
            <span>
              <a
                href="https://github.com/jollofo/portfolio-website/blob/main/public/Muguiyi_James_Resume.pdf"
                target="undefined"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}
