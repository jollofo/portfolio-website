import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Container = ({ className = "", children }: Props) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-16 md:px-20 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
