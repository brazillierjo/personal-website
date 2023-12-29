import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

/**
 * ScrollToTop component is a React functional component that scrolls the page to the top
 * when a button is clicked. It also shows a button when the user scrolls down the page.
 *
 * @return {JSX.Element} The ScrollToTop component.
 */
export default function ScrollToTop() {
  const [buttonIsShown, setButtonIsShown] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 500) {
        setButtonIsShown(true);
      } else {
        setButtonIsShown(false);
      }
    };
  }, []);

  return (
    <>
      {buttonIsShown ? (
        <div className="fixed bottom-10 right-10 z-20 h-8 w-8 rounded-full bg-primary-400 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <button onClick={scrollToTop}>
            <HiArrowSmUp color="white" size={25} className="mt-1" />
          </button>
        </div>
      ) : null}
    </>
  );
}
