import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

function useScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  });

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollToTop);
  }

  return (
    <>
      <FiChevronUp
        className="cursor-pointer bg-white shadow-lg text-white-lilac-950 dark:bg-white-lilac-900 dark:text-white-lilac-50"
        onClick={backToTop}
        style={{
          height: 40,
          width: 40,
          padding: 7,
          borderRadius: 50,
          right: 50,
          bottom: 50,
          display: showScroll ? "flex" : "none",
        }}
      />
    </>
  );
}

export default useScrollToTop;