import type { FC, HTMLAttributes } from 'react';
export type IconBentArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconBentArrow: FC<IconBentArrowProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M14 20.5l-1.07-1.07 3.697-3.68H5.5V4.5H7v9.75h9.627l-3.696-3.696 1.054-1.07L19.5 15 14 20.5z"
        fill="#9E9E9E"
      />
    </svg>
  );
};
