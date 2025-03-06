"use client";

import hamburger from "../images/hamburger.png";
import user from "../images/user.png";
import Image from "next/image";

type NavButton = {
  type: string;
};

const NavButton = (buttonType: NavButton) => {
  const handleUserClick = () => {
    console.log("user");
  };

  const handleHamburgerClick = () => {
    console.log("borger");
  };

  if (buttonType.type === "USER") {
    return (
      <div className="items-center flex">
        <a href="/sign-up"className="absolute right-15 text-blue-500">sign-up</a>
        <button className="pl-2" onClick={handleUserClick}>
          <Image src={user} alt="User" width={24} height={24}></Image>
        </button>
      </div>
    );
  } else if (buttonType.type === "HAMBURGER") {
    return (
      <button onClick={handleHamburgerClick}>
        <Image src={hamburger} alt="Hamburger" width={24} height={24}></Image>
      </button>
    );
  }
};

export default NavButton;
