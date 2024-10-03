import { Section } from "@/layout/Section";
import { Logo } from "@/templates/Logo";
import { email, phone_number, phone_number_pretty } from "@/utils/constants";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { span } from "framer-motion/client";
import Link from "next/link";

const headerMenuItems = [
  {
    title: "Xe cưới yêu thích",
    path: "/dich-vu/xe-cuoi-yeu-thich",
  },
  {
    title: "Xe cưới mui trần",
    path: "/dich-vu/xe-cuoi-mui-tran",
  },
  {
    title: "Xe cưới vip",
    path: "/dich-vu/xe-cuoi-vip",
  },
  {
    title: "Mẫu hoa cưới",
    path: "/dich-vu/mau-hoa-cuoi",
  },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onMenuClick = () => {
    onOpen();
  };

  return (
    <>
      <Section yPadding="py-0">
        <div className="flex flex-wrap items-center justify-between md:h-[90px] h-[75px] overflow-hidden">
          <div className="h-full">
            <Link href="/">{<Logo />}</Link>
          </div>
          <nav className="h-full hidden md:block">
            <ul className="navbar flex items-center text-base font-medium text-gray-800 gap-5 h-full">
              {headerMenuItems.map((e) => (
                <li key={e.path} className="cursor-pointer">
                  <Link className="hover:text-primary-500" href={e.path}>
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="flex md:hidden" onClick={onMenuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </Section>
      <Modal
        closeButton={<></>}
        placement="top-center"
        isDismissable={true}
        isKeyboardDismissDisabled
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <ModalContent className="md:w-[80vw] w-[85vw] h-full absolute right-0">
          <ModalHeader>
            <button onClick={() => onClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </ModalHeader>
          <ModalBody className="p-0">
            <nav>
              <ul className="navbar flex flex-col items-center text-base font-medium text-gray-800 gap-0 h-full">
                {headerMenuItems.map((e) => (
                  <li
                    key={e.path}
                    className="h-[50px] p-0 hover:bg-slate-50 hover:text-primary-500 w-full cursor-pointer flex p-0 shadow-sm items-stretch justify-center"
                    onClick={onClose}
                  >
                    <Link
                      className="w-full h-full flex items-center justify-center"
                      href={e.path}
                    >
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ModalBody>
          <ModalFooter className="flex-col px-0 py-2">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className="flex flex-row pl-5 gap- items-center py-1 text-xs">
              <ul className="flex flex-col gap-3">
                <li className="relative">
                  <span className="float-left flex items-center justify-center mr-1 absolute top-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <span className="ml-4">
                    433 Lạc Long Quân, phường 5, quận 11, thành phố Hồ Chí Minh
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-4 size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Giờ làm việc: 08:00 - 20:00</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-4 size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span
                    className="cursor-pointer"
                    onClick={() => window.open(`tel:${phone_number}`)}
                  >
                    SĐT: {phone_number_pretty}
                  </span>
                </li>
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span
                    className="cursor-pointer"
                    onClick={() => window.open(`mailto:${phone_number}`)}
                  >
                    Email: {email}
                  </span>
                </li>
              </ul>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
