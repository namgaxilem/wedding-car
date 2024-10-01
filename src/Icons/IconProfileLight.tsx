import { IconProps } from '@/app/models/utils';
import type { FC } from 'react';

export const IconProfileLight: FC<IconProps> = (props) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5859_84375)">
        <rect width="96" height="96" rx="48" fill="#FCFCFC" />
        <circle cx="48" cy="36.0015" r="16" fill="#D7D7D7" />
        <circle cx="48" cy="92.0015" r="36" fill="#D7D7D7" />
      </g>
      <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#EFEFEF" />
      <defs>
        <clipPath id="clip0_5859_84375">
          <rect width="96" height="96" rx="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
