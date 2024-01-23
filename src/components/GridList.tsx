import React from "react";
import Container from "./Container";

interface Content {
  title: string;
  src: string;
}

interface Props {
  content: Content[];
}

const GridList = ({ content }: Props) => {
  return (
    <Container className="py-[11rem]">
      <h2 className="text-3xl pt-10 pb-20 md:text-5xl lg:text-7xl">
        Technologies -
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {content.map((item, key) => (
          <div key={key} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-xl text-black text-center mix">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GridList;
