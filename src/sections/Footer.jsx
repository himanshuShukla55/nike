import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link to="#home">
            <img src={footerLogo} alt="footerlogo" width={150} height={46} />
          </Link>
          <p className="mt-6 text-base leading-7 font-monsterrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:cursor-pointer hover:bg-slate-gray"
              >
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {title}
              </h4>
              <ul>
                {links.map(({ name }) => (
                  <li
                    key={name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray hover:cursor-pointer"
                  >
                    <Link>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-monsterrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-monsterrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
