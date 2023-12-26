import React, { useState } from "react";

interface Props {
  title: string;
  content: { [key: string]: string[] };
  gap?: number;
}

const Dropdown = ({ title, content, gap = 5 }: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <span
        onClick={toggleDropdown}
        className="cursor-pointer text-[#DC4974] glow"
      >
        {title}
      </span>
      {isDropdownVisible && (
        <div className="my-5 p-5 gap-1">
          <div className="pl-2">
            <ul style={{ gap }}>
              {Object.entries(content).map(([key, values]) => (
                <div key={key}>
                  <div className="flex space-x-1">
                  <svg
                    className="w-6 h-6 mt-2 text-gray-400/80 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <p className="text-[#DC4974] pb-2 text-3xl">{key}</p>
                  </div>
                  {values.map((value, index) => (
                    <p key={index} className="pl-6 pb-5 text-2xl">
                      {value}
                    </p>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
