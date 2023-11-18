import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-center items-center max-container max-lg:justify-between">
        <Link to="#top" smooth>
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link to={href} smooth>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
