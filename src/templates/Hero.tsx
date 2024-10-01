import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-0">
      <div className="hidden md:flex gap-10 flex-row-reverse py-1 text-sm">
        <ul className="flex gap-3">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>Giờ làm việc: 08:00 - 20:00</span>
          </li>
          <li className="h-70 bg-gray-500 w-[1px]"></li>
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span
              className="cursor-pointer"
              onClick={() => window.open("tel:0903489745")}
            >
              SĐT: 0903.489.745
            </span>
          </li>
        </ul>
      </div>
    </Section>

    <Section yPadding="py-0">
      <NavbarTwoColumns logo={<Logo />}>
        <li className="cursor-pointer">
          <a
            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]"
            target="blank"
            href="https://www.facebook.com/profile.php?id=61565976143572"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]"
            target="blank"
            href="https://www.facebook.com/profile.php?id=61565976143572"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#6a76ac]"
            target="blank"
            href="https://www.facebook.com/profile.php?id=61565976143572"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <div className="w-full h-[400px] flex items-center justify-center relative">
      <img
        className="demo-bg absolute w-full h-full object-cover bg-black/50"
        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/461073060_122104746098532538_3342243981522916773_n.png?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEcVp1sz8MM5GdMZO57M32TI6i_AiWzL-QjqL8CJbMv5CPgbymkd0RZ2MOlsnFz2neqtlkmJ1z0Zch8aT5GDWew&_nc_ohc=IGUhruoXNv4Q7kNvgFt4gAi&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYBifZStnWkb9tummrSXiDFo5HC1_RgsNAveqFw5M_f68A&oe=6700434D"
        alt=""
      />
      <div className="backdrop-brightness-10 absolute top-0 w-full h-full bg-black/30" />
      <div className="z-10 md:w-70 w-90 text-wrap overflow-hidden">
        <section className="text-center backdrop-brightness-10 bg-black/30 py-5">
          <h1 className="whitespace-pre-line md:text-3xl xl:text-5xl text-xl font-bold leading-hero text-white">
            <div className="leading-7">
              Dịch vụ cho thuê xe cưới chuyên nghiệp
            </div>
            <div className="text-primary-500">The Wedding Car</div>
          </h1>
          <div className="mb-16 mt-4 text-2xl hidden md:block"></div>
          <button
            onClick={() => window.open("tel:0903489745")}
            className="md:text-2xl text-xl pb-2 text-white"
          >
            Hotline: 0903.489.745
          </button>
        </section>
      </div>
    </div>
  </Background>
);

export { Hero };
