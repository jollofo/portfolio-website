 import React from "react";

interface Props {
  content: { [key: string]: string[] };
}

const Accordion = ({ content }: Props) => {
  const boxStyle =
    "relative h-full flex-1 bg-left bg-cover duration-700 shadow-md hover:flex-[7] hover:h-[41rem] box bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/beanstalk-dark.png') flex items-center justify-center m-6";

  return (
    <div className="w-full h-[41rem] bg-black m-auto flex flex-row shadow-md cursor-pointer">
      {Object.entries(content).map(([key, values], index) => (
        <div key={index} className={`${boxStyle}`}>
          <h2 className="-rotate-45 text-7xl transform origin-center text-center reverse-text text-[#DC4974]">
            {key}
          </h2>
          <div className="absolute text p-8 items-center">
            <h2 className="text-5xl text-[#DC4974]">{key}</h2>
            {values.map((value, index) => (
              <div key={index} className="">
                <br />
                <p key={index} className="">{value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
