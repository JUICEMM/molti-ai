import { MenuIcon } from "lucide-react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";

const NavbarMenu_mobile = () => {
  const [isMobileNavbarMenuOpen, setIsMobileNavbarMenuOpen] =
    useState<boolean>(false);
  return (
    <div className="ml-auto flex items-center md:hidden">
      <button onClick={() => setIsMobileNavbarMenuOpen(true)}>
        <MenuIcon />
      </button>
      <div
        className={
          isMobileNavbarMenuOpen === true
            ? "fixed inset-0  z-[999] h-screen bg-teal-600 bg-opacity-90 backdrop:blur"
            : "fixed z-[999]  hidden h-0"
        }
      >
        <div className="absolute top-5 right-5">
          <IconButton onClick={() => setIsMobileNavbarMenuOpen(false)}>
            <CloseIcon sx={{ color: "white",fontSize: "2rem" }} />
          </IconButton>
        </div>
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col gap-3 font-bold text-white">
            <Link
              href={"/"}
              className="rounded-md px-8 py-2 text-center transition-colors duration-200 ease-in-out hover:bg-teal-300"
            >
              首頁
            </Link>
            <Link
              href={"/keyword"}
              className="rounded-md px-8 py-2 text-center transition-colors duration-200 ease-in-out hover:bg-teal-300"
            >
              關鍵字查詢
            </Link>
            <Link
              href={"/category"}
              className="rounded-md px-8 py-2 text-center transition-colors duration-200 ease-in-out hover:bg-teal-300"
            >
              商品分類
            </Link>
            <Link
              href={"/kol"}
              className="rounded-md px-8 py-2 text-center transition-colors duration-200 ease-in-out hover:bg-teal-300"
            >
              KOL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu_mobile;
