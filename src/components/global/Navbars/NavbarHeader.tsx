import logo from "../../../../public/logo.png";
import Image from "next/image";

const NavbarHeader = () => {
  return (
    <div className="p-4">
      <Image src={logo} alt="logo" width={130} height={130} className="rounded-md"/>
    </div>
  );
};

export default NavbarHeader;
