import type { FC, HTMLAttributes } from 'react';

export type IconExpandMoreProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconExpandMore: FC<IconExpandMoreProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0016 12.5311L5.29004 7.81959L6.16823 6.94141L10.0016 10.7747L13.8349 6.94141L14.7131 7.81959L10.0016 12.5311Z"
        fill="#666666"
      />
    </svg>
  );
};
