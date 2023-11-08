import React from "react";

interface Props {
  title: string;
  gap?: number;
  content: string[];
}

const List = ({ title, content, gap = 4 }: Props) => {
  return (
    <div>
      <p className="text-gray-400/80 md:text-sm xl:text-base mb-4 font-medium">
        {title}
      </p>
      <ul style={{ gap }} className="flex flex-col">
        {content.map((item, index) => (
          <>
            <li
              className="md:text-sm xl:text-base"
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
