import Image from "next/image";
import { AppConfig } from "../utils/AppConfig";

const Logo = () => {
  return (
    <span
      className={`inline-flex items-center text-gray-900 font-semibold xl:text-2xl md:text-xl text-base gap-1 max-h-full`}
    >
      <Image
        src={"/assets/images/logo.png"}
        width={90}
        height={90}
        alt="Logo"
        className="max-h-full md:h-[90px] md:w-[90px] h-[75px] w-[75px]"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
