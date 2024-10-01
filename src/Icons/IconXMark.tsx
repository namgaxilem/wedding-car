
import type { FC, HTMLAttributes } from "react";

export type IconXMarkProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconXMark: FC<IconXMarkProps> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
