import { GoHome } from "react-icons/go";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

export function SidebarMobile() {
  const location = useLocation();

  return (
    <div className="border border-secondaryHi fixed top-2 left-1/2 transform -translate-x-1/2 bg-primaryBg bg-opacity-50 backdrop-blur-md shadow-lg flex items-center z-50 rounded-2xl p-2 h-20">
      <div className="flex flex-row gap-x-6 px-5 md:gap-x-12">
        <Link
          to="/"
          className={`flex flex-col justify-center items-center ${
            location.pathname === "/" ? "text-primary" : "text-white"
          } hover:text-primary transition-colors duration-300`}
        >
          <GoHome size={24} />
          Home
        </Link>

        <Link
          to="/sobre"
          className={`flex flex-col justify-center items-center ${
            location.pathname === "/sobre" ? "text-primary" : "text-white"
          } hover:text-primary transition-colors duration-300`}
        >
          <MdOutlinePersonOutline size={24} />
          Sobre
        </Link>

        <Link
          to="/Email"
          className={`flex flex-col justify-center items-center ${
            location.pathname === "/Email" ? "text-primary" : "text-white"
          } hover:text-primary transition-colors duration-300`}
        >
          <IoMailUnreadOutline size={24} />
          Email
        </Link>

        <Link
          to="/formacao"
          className={`flex flex-col justify-center items-center ${
            location.pathname === "/formacao" ? "text-primary" : "text-white"
          } hover:text-primary transition-colors duration-300`}
        >
          <PiCertificateBold size={24} />
          Formação
        </Link>
      </div>
    </div>
  );
}

export default SidebarMobile;
