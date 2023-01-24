import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const JumpToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="container text-white hover:text-gray-500">
          <button
            className={`block fixed bottom-9 right-7 md:bottom-10 md:right-10 bg-black py-2.5 px-3 md:py-3 md:px-3.5 text-lg`}
            style={{ borderRadius: "50%" }}
            onClick={handleClick}
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
  //   return <button onClick={handleClick}>Jump to Top</button>;
};

export default JumpToTop;
