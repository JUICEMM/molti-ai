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
    title: "矩陣系統",
    href: " /matrix-ai",
  },
  {
    title: "影片服務",
    href: " /photoservice",
  },
  {
    title: "高效剪輯訓練營",
    href: " /liveservice",
  },
  {
    title: "熱門趨勢",
    href: "/hotspot",
  },
  {
    title: "AI社群標籤生成工具",
    href: "/keyword-ai",
  },
  {
    title: "短影音代運營",
    href: "/consultant",
  },
  {
    title: "銷售夥伴後台入口",
    href: "https://cashier.ecpay.com.tw/manage/login?manual_login=True&_gl=1*8ymt49*_gcl_au*MTMwOTkyNjc0NC4xNzA0ODU1MzU0"
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-[999] flex w-full bg-white">
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
