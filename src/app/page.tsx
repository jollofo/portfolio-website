"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import Dropdown from "@/components/Dropdown";
import {
  headerLeftContent,
  headerRightContent,
  works,
  uofr,
  ala,
  technologies
} from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen text-black">
      <Header />
      <header className="py-56">
        <Container>
          <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-light md::max-w-[900px] leading-[3.5rem] mt-20 text-center">
            Hi, I'm James Muguiyi
          </h1>
          <br></br>
        </Container>
      </header>
      <section className="py-20">
        <Container className="flex gap-10 md:gap-20 flex-col md:flex-row font-light">
          <article className="text-2xl md:text-4xl leading-[1.4] md::max-w[900px]">
            <p className="pb-10">
              I am currently a senior at the
              <Dropdown
                title="University of Rochester."
                content={uofr}
                gap={10}
              />{" "}
              in Rochester, New York.
            </p>

            <p className="pb-10">
              Prior to this, I had the privilege to attend the
              <Dropdown
                title="African Leadership Academy"
                content={ala}
                gap={10}
              />{" "}
              in South Africa. 
            </p>

            <p className="pb-10">
              Throughout these experience, I have had the privilege to learn
              <Dropdown
                title="various technologies."
                content={technologies}
                gap={10}
              /> 
            </p>

            {headerLeftContent.map((p, i) => (
              <>
                <p
                  className="pb-10"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              </>
            ))}
          </article>

          <div className="text-[#DC4974] min-w-[300px] flex flex-col gap-4">
            <List
              gap={10}
              title="Education —————————"
              content={headerRightContent.education}
            />
            <List
              gap={10}
              title="Experiences ————————"
              content={headerRightContent.experiences}
            />
            <List
              gap={10}
              title="Activities —————————"
              content={headerRightContent.activities}
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
