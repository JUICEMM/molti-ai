import NavbarHeader from "./NavbarHeader";
import NavbarMenu from "./NavbarMenu";
import NavbarMenu_mobile from "./NavbarMenu_mobile";
import NavbarUserAvator from "./NavbarUserAvator";

export const navItems: Array<{ title: string; href: string; }> = [
  {
    title: "首頁",
    href: "/",
  },
  {
    title: "熱點工具",
    href: "/hotspot",
  },
  {
    title: "AI產生關鍵字排序",
    href: "/keyword-ai",
  },
  {
    title: "矩陣系統",
    href: " /matrix-ai",
  },
  {
    title: "影片服務",
    href: " /photoservice",
  },
];
const Navbar = () => {

  return (
    <>
      <nav className="fixed z-[999] flex w-full bg-white">
        <div className="mx-auto flex items-center w-[90%]">
          <NavbarHeader />
          <NavbarMenu navItems={navItems}/>
          <NavbarMenu_mobile  navItems={navItems}/>
          <NavbarUserAvator />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
