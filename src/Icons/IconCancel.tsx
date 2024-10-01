import type { FC, HTMLAttributes } from "react";

export type IconCancelProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconCancel: FC<IconCancelProps> = (props) => {
  const color = props.color ?? "#CACACA";
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.59982 11.1029L7.99982 8.70286L10.3998 11.1029L11.1024 10.4003L8.70237 8.00031L11.1024 5.60031L10.3998 4.89776L7.99982 7.29776L5.59982 4.89776L4.89727 5.60031L7.29727 8.00031L4.89727 10.4003L5.59982 11.1029ZM8.00094 14.3336C7.12498 14.3336 6.30163 14.1674 5.53087 13.835C4.7601 13.5025 4.08965 13.0513 3.5195 12.4815C2.94935 11.9116 2.49798 11.2414 2.16539 10.471C1.8328 9.70057 1.6665 8.87738 1.6665 8.00143C1.6665 7.12547 1.83273 6.30211 2.16517 5.53136C2.49762 4.76059 2.94878 4.09014 3.51867 3.51999C4.08857 2.94984 4.75873 2.49847 5.52915 2.16588C6.29957 1.83329 7.12275 1.66699 7.9987 1.66699C8.87466 1.66699 9.69802 1.83322 10.4688 2.16566C11.2395 2.4981 11.91 2.94927 12.4801 3.51916C13.0503 4.08906 13.5017 4.75922 13.8343 5.52964C14.1668 6.30005 14.3331 7.12324 14.3331 7.99919C14.3331 8.87515 14.1669 9.6985 13.8345 10.4693C13.502 11.24 13.0509 11.9105 12.481 12.4806C11.9111 13.0508 11.2409 13.5022 10.4705 13.8347C9.70008 14.1673 8.87689 14.3336 8.00094 14.3336Z"
        fill={color}
      />
    </svg>
  );
};
