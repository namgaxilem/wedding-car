import type { FC, HTMLAttributes } from 'react';

export type IconFacebookLogoProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconFacebookLogo: FC<IconFacebookLogoProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <g clipPath="url(#clip0_3302_12195)">
        <path
          d="M32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 23.9859 6.35094 30.6053 14 31.8056V20.625H9.9375V16H14V12.475C14 8.465 16.3888 6.25 20.0434 6.25C21.7934 6.25 23.625 6.5625 23.625 6.5625V10.5H21.6075C19.62 10.5 19 11.7334 19 13V16H23.4375L22.7281 20.625H19V31.8056C26.6491 30.6053 32.5 23.9859 32.5 16Z"
          fill="#1877F2"
        />
        <path
          d="M22.7281 20.625L23.4375 16H19V13C19 11.7347 19.62 10.5 21.6075 10.5H23.625V6.5625C23.625 6.5625 21.7941 6.25 20.0434 6.25C16.3888 6.25 14 8.465 14 12.475V16H9.9375V20.625H14V31.8056C15.6566 32.0648 17.3434 32.0648 19 31.8056V20.625H22.7281Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3302_12195">
          <rect width="32" height="32" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
