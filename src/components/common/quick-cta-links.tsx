import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = { title?: string; className?: string };
export const QuickCTALinks = ({ className }: Props) => {
  return (
    <div className={cn("w-full max-w-lg space-y-4 text-xs", className)}>
      <div className="grid grid-cols-10 bg-gray-300">
        <div
          className="col-span-3 border-r-[6px] border-orange-300 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/img/money.jpg")' }}
        />
        <div className="col-span-7 p-4">
          <strong>
            <Link
              className="underline-offset-2 leading-loose underline hover:text-lime-600 text-lime-700 transition-colors duration-200"
              href="/donate"
            >
              Donate
            </Link>
          </strong>
          <p>
            <Link className="underline underline-offset-2" href="/donate">
              Support Our cause
            </Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-10 bg-gray-300">
        <div
          className="col-span-3 border-r-[6px] border-green-500 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/img/contact-tel.jpg")' }}
        />
        <div className="col-span-7 p-4">
          <strong>
            <Link
              className="underline-offset-2 leading-loose underline hover:text-lime-600 text-lime-700 transition-colors duration-200"
              href="/contact"
            >
              Contact Us
            </Link>
          </strong>
          <p>
            <Link className="underline underline-offset-2" href="/contact">
              Get In Touch Today
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
