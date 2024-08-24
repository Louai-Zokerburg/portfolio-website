"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaRegAddressCard, FaCode } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

type PropTypes = {
  mobile?: boolean;
};

const NavigationLinks = ({ mobile = false }: PropTypes) => {
  const pathname = usePathname();

  const iconSize = mobile ? 20 : 24;
  const textSize = mobile ? "text-xs" : "text-sm";
  return (
    <ul className="nav-links">
      <Link
        href="/"
        className={`nav-link ${pathname === "/" && "selected-nav-link"}`}
      >
        <FaHouse size={iconSize} />
        <p className={textSize}>Home</p>
      </Link>

      <Link
        href="/about"
        className={`nav-link ${pathname === "/about" && "selected-nav-link"}`}
      >
        <FaRegAddressCard size={iconSize} />
        <p className={textSize}>About</p>
      </Link>

      <Link
        href="/projects"
        className={`nav-link ${
          pathname.includes("/projects") && "selected-nav-link"
        }`}
      >
        <FaCode size={iconSize} />
        <p className={textSize}>Project</p>
      </Link>
    </ul>
  );
};

export default NavigationLinks;
