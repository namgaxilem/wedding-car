import { phone_number, phone_number_pretty } from "@/utils/constants";

export default function MainBanner() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <img
        className="demo-bg absolute w-full h-full object-cover bg-black/50"
        src="/assets/images/main_landing_image.png"
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
            onClick={() => window.open(`tel:${phone_number}`)}
            className="md:text-2xl text-xl pb-2 text-white"
          >
            Hotline: {phone_number_pretty}
          </button>
        </section>
      </div>
    </div>
  );
}
