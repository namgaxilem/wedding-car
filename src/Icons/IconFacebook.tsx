import type { FC, HTMLAttributes } from "react";

export type IconFacebookProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconFacebook: FC<IconFacebookProps> = (props) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#424242" />
      <path
        d="M19.4365 16.9575L19.8732 14.1854H17.1831V12.3835C17.1831 11.6255 17.5587 10.8848 18.7596 10.8848H19.9998V8.52414C19.2776 8.40907 18.5478 8.34682 17.8163 8.33789C15.6023 8.33789 14.1569 9.66765 14.1569 12.0716V14.1854H11.7026V16.9575H14.1569V23.6626H17.1831V16.9575H19.4365Z"
        fill="white"
      />
    </svg>
  );
};
