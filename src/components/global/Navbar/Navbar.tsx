import React, { useState } from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarMenu from "./NavbarMenu";
import NavbarMenu_mobile from "./NavbarMenu_mobile";
import NavbarUserAvator from "./NavbarUserAvator";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-50 flex w-full border-b border-gray-300 bg-white backdrop-blur">
        <div className="mx-auto flex w-[90%]">
          <NavbarHeader />
          <NavbarMenu />
          <NavbarMenu_mobile />
          <NavbarUserAvator />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
