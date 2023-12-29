import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import DesktopNavbar from "../Navbars/DesktopNavbar";
import MobileNavbar from "../Navbars/MobileNavbar";

/**
 * Renders the header component depending on the screen size.
 *
 * @return {React.ReactElement} The rendered header component.
 */
export const Header: React.FC<{}> = () => {
  const [_, setScrollOffset] = useState(0);

  const { width } = useWindowSize();

  const handleScroll = () => {
    const newScrollOffset = window.scrollY;
    setScrollOffset(newScrollOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (width < 768) return <MobileNavbar />;

  return <DesktopNavbar />;
};
