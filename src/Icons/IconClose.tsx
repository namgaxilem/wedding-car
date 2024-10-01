import type { FC, HTMLAttributes } from 'react';
export type IconCloseProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconClose: FC<IconCloseProps | any> = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.532 24.87l-1.405-1.405L14.594 16 7.127 8.532l1.405-1.405L16 14.594l7.466-7.467 1.405 1.405L17.404 16l7.466 7.466-1.405 1.405L16 17.404 8.532 24.87z"
        fill="#424242"
        {...props}
      />
    </svg>
  );
};
