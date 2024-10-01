import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconArrowBack: FC<IconArrowProps | any> = (props) => {
  return (
    <svg
      color="white"
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};
