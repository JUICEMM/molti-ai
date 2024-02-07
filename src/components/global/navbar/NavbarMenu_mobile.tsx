import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type NavbarMenu_mobileProps = {
  navItems: Array<{ title: string; href: string }>;
};

const NavbarMenu_mobile = ({ navItems }: NavbarMenu_mobileProps) => {
  const [isMobileNavbarMenuOpen, setIsMobileNavbarMenuOpen] =
    useState<boolean>(false);
  return (
    <div className="ml-auto flex items-center xl:hidden">
      <button onClick={() => setIsMobileNavbarMenuOpen(true)}>
        <MenuIcon />
      </button>
      <div
        className={`${
          isMobileNavbarMenuOpen === true
            ? "fixed inset-0  z-[999] max-h-screen bg-neutral-200 bg-opacity-90 backdrop:blur"
            : "fixed z-[999]  hidden h-0"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="absolute top-5 right-5">
          <IconButton onClick={() => setIsMobileNavbarMenuOpen(false)}>
            <CloseIcon sx={{ color: "black", fontSize: "2rem" }} />
          </IconButton>
        </div>
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col gap-3 font-bold text-neutral-800">
            {navItems.map((navitem) => (
              <Link
                key={navitem.title}
                href={navitem.href}
                className="rounded-md px-8 py-2 text-center transition-colors duration-200 ease-in-out hover:bg-neutral-300"
                onClick={() => setIsMobileNavbarMenuOpen(false)}
              >
                {navitem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu_mobile;
