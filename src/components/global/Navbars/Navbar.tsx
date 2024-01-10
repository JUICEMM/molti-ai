import NavbarHeader from "./NavbarHeader";
import NavbarMenu from "./NavbarMenu";
import NavbarMenu_mobile from "./NavbarMenu_mobile";
import NavbarUserAvator from "./NavbarUserAvator";

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "關聯字",
    href: "/keyword",
    description: "透過關鍵字數據進行關聯分析，列舉出關聯度最高的百大關鍵字",
  },
  {
    title: "AI關鍵字",
    href: "/keyword-ai",
    description: "透過AI取得關聯度最高的百大關鍵字",
  },
  {
    title: "矩陣系統",
    href: " /matrix-ai",
    description:
      "快速製作短影音，霸頻不是夢",
  },
  {
    title: "影片服務",
    href: " /photoservice",
    description:
      "幫助您解決攝影及剪輯問題",
  },
];
const Navbar = () => {

  return (
    <>
      <nav className="fixed z-[999] flex w-full border-b border-gray-300 bg-white backdrop-blur">
        <div className="mx-auto flex items-center w-[90%]">
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
