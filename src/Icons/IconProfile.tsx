import { IconProps } from '@/app/models/utils';
import type { FC } from 'react';

export const IconProfile: FC<IconProps> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2774_6812)">
        <rect width="32" height="32" rx="16" fill="white" />
        <circle cx="16" cy="13" r="5" fill="#D7D7D7" />
        <circle cx="16" cy="30" r="10" fill="#D7D7D7" />
      </g>
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#D7D7D7" />
      <defs>
        <clipPath id="clip0_2774_6812">
          <rect width="32" height="32" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
