import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FiAtSign } from "react-icons/fi";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import useWindowSize from "@/hooks/useWindowSize";
const Header = () => {
  const { width } = useWindowSize();
  return (
    <div className="sticky top-0 z-20">
      <Container className="flex  justify-between py-8 text-sm header">
        <Link href="/">James Muguiyi</Link>
        <nav className="flex items-center gap-8">
          <Link href="https://www.github.com/jollofo">
            {width >= 776 ? "github" : <BsGithub className="text-3xl" />}
          </Link>
          <Link href="https://www.linkedin.com/in/james-muguiyi-838917209/">
            {width >= 776 ? "linkedin" : <BsLinkedin className="text-3xl" />}
          </Link>
          {width < 776 && (
            <Link href="/">
              <FiAtSign className="text-3xl" />
            </Link>
          )}
        </nav>
        {width >= 776 && <Link href="https://www.jmuguiyijr@gmail.com">jmuguiyijr@gmail.com</Link>}
      </Container>
    </div>
  );
};

export default Header;
