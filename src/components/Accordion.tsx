import React from "react";

interface Props {
  content: object;
}

const Accordion = ({content}: Props) => {
  const boxStyle =
    "relative h-full flex-1 bg-left bg-cover duration-700 shadow-md hover:flex-[7] hover:h-[41rem] box";
  const textStyle = `absolute p-[10px] text`;

  return (
    <div className="w-full h-[41rem] bg-black m-auto flex flex-row shadow-md cursor-pointer ">
      <div
        className={`${boxStyle} bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/country-quilt-dark.png') flex items-center justify-center`}
      >
        <h2 className="-rotate-[45deg] text-7xl transform origin-center reverse-text">
          ALA
        </h2>
        <div className={`${textStyle}`}>
          <h2 className="text-5xl">ALA</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            iaculis nisl sed dictum aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
