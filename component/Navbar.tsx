import Link from "next/link";
import Image from "next/image";
import { Custombutton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[144px] mx-auto flex justify-between items-center
 sm:px-16 px-6 py-4"
      >
        <link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={118}
            className="object-contain"
          />
        </link>
      </nav>
    </header>
  );
};
