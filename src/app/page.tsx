"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import List from "@/components/List";
import Slider from "@/components/Slider";
import { headerLeftContent, headerRightContent, works } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-[#49DCB1]">
      <Header />
      <header className="py-56">
        <Container>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light md:pr-20 lg:pr-32 md::max-w-[900px] leading-[3.5rem] mt-20">
            Hi, I’m James - an aspiring software developer with a passion for full stack.
            Welcome to my page.
          </h1>
          <br></br>
        </Container>
      </header>
      <section className="py-20">
        <Container className="flex gap-10 md:gap-20  flex-col md:flex-row font-light">
          <article className="text-2xl md:text-4xl leading-[1.4]">
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
          <div className="text-[#D3CDD7] min-w-[300px] flex flex-col gap-4">
            <List gap={0} title="Education —————————" content={headerRightContent.education} />
            <List
              gap={10}
              title="Experiences ————————"
              content={headerRightContent.experiences}
            />
            <List gap={10} title="Activities —————————" content={headerRightContent.activities} />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="text-[#D3CDD7] !max-w-[1400px] px-4 flex flex-col gap-20 md:gap-32">
          <h1 className="text-[#49DCB1] text-3xl md:text-5xl lg:text-7xl">Projects —</h1> 
          {works.map((work, i) => (
            <Slider key={i} title={work.title} data={work.data} />
          ))}
        </Container>
      </section>
    </main>
  );
}
