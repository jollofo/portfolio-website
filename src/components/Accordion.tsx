import React from "react";

const Accordion = () => {
  const boxStyle =
    "relative h-full flex-1 bg-left bg-cover duration-700 shadow-md hover:flex-[7] hover:h-[41rem] box";
  const textStyle = `absolute p-[10px] text`;

  return (
    <div className="w-full h-[41rem] bg-black m-auto flex flex-row shadow-md cursor-pointer">
      <div
        className={`${boxStyle} bg-[url('../../public/images/ala.png')] hover:blur hover:grayscale`}
      >
        <div className="">
          <div className={`${textStyle}`}>
            <h2 className="text-5xl">ALA</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis nisl sed dictum aliquam.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${boxStyle} bg-[url('../../public/images/ur.png')]`}
      >
        <div className="image_2">
          <div className={`${textStyle}`}>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis nisl sed dictum aliquam.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${boxStyle} bg-[url('../../public/images/programming.png')]`}
      >
        <div className="image_3">
          <div className={`${textStyle}`}>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis nisl sed dictum aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
