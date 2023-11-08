import { useState, useEffect } from "react";

function useWindowSize(): { width: number; height: number } {
  const [windowSize, setWindowSize] = useState({
    width: typeof window === "undefined" ? 0 : window?.innerWidth,
    height: typeof window === "undefined" ? 0 : window?.innerHeight,
  });

  useEffect(() => {
    // Function to update the window size
    function handleResize() {
      setWindowSize({
        width: typeof window === "undefined" ? 0 : window?.innerWidth,
        height: typeof window === "undefined" ? 0 : window.innerHeight,
      });
    }

    typeof window !== "undefined" &&
      window?.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
