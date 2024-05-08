import Image from "next/image";
import Link from "next/link";
import img1 from "../public/15_logo.png";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          {/* check */}
          <Link href="/">
            <Image
              src={img1}
              alt="Suraj Prasad"
              width={200}
              height={120}
              priority
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
