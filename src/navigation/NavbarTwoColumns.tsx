import Link from "next/link";
import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between md:h-[90px] h-[75px] overflow-hidden">
    <div className="h-full">
      <Link href="/">{props.logo}</Link>
    </div>

    <nav className="h-full">
      <ul className="navbar flex items-center text-xl font-medium text-gray-800 gap-3 h-full">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
