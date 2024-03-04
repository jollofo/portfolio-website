import React from "react";
import Container from "./Container";

interface Content {
  title: string;
  date: string;
  paragraph: string;
}
interface Props {
  title: string;
  cols: number;
  content: Content[];
}

const Card = ({ title, cols, content }: Props) => {
  return (
    <div className="bg-white py-8 w-full sm:py-16">
      <Container className="!max-w-[1400px]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-black sm:text-4xl">
              {`${title} -`}
            </h2>
          </div>
          <div
            className={`mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-gray-400 pt-8 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none`}
          >
            {content.map((item, key) => (
              <article
                key={key}
                className="flex max-w-xl flex-col items-start"
              >
                <div className="flex items-center gap-x-4">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-black">
                    <p>{item.title}</p>
                  </h3>
                </div>
                <div className="group relative">
                  <p className="text-gray-500">{item.date}</p>
                  <p className="text-xl mt-5 leading-6 text-black">
                    {item.paragraph}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
