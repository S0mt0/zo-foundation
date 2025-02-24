import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

export const FixedSocials = () => {
  return (
    <div className="fixed right-0 top-60 bg-[#e1ba38] py-10 w-14 items-center justify-center sm:flex flex-col gap-4 isolate z-20 hidden">
      <a href="mailto:onyekazita@gmail.com">
        <FaFacebookF className="h-4 w-4 text-black/80 hover:text-black/70 transition-colors" />
      </a>
      <a href="tel:+2348037864683">
        <IoCallSharp className="h-4 w-4 text-black/80 hover:text-black/70 transition-colors" />
      </a>
      <a href="mailto:onyekazita@gmail.com">
        <BiLogoGmail className="h-4 w-4 text-black/80 hover:text-black/70 transition-colors" />
      </a>
    </div>
  );
};
