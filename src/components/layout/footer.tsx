import { MapPin } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="mt-14 bg-slate-800 text-stone-400 text-xs">
      <div className="flex flex-wrap justify-center items-center text-center gap-y-3 gap-x-12 p-6">
        <address className="shrink-0 whitespace-nowrap flex items-center gap-3">
          <MapPin className="h-4 w-4 text-stone-200" />
          <span>
            16, Nkwere Street, Garki Area 11,
            <br /> FCT Abuja, Nigeria.
          </span>
        </address>
        <div className="shrink-0 whitespace-nowrap flex items-center gap-4">
          <ImPhoneHangUp className="h-3 w-3 text-stone-200" />
          <a href="tel:+2348037864683">+234 803 7864 683</a>
        </div>
        <div className="shrink-0 whitespace-nowrap flex items-center gap-4">
          <FaPaperPlane className="h-3 w-3 text-stone-200" />
          <a href="mailto:">onyekazita@gmail.com</a>
        </div>
      </div>
      <div className="bg-[#121525] p-6 text-center">
        &copy; 2025. All rights reserved. Website by{" "}
        <a href="mailto:sewkito@gmail.com" className="underline">
          Sewkito.
        </a>
      </div>
    </footer>
  );
};
