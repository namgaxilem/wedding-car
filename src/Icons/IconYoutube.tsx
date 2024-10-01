import { IconProps } from '@/app/models/utils';
import type { FC, HTMLAttributes } from 'react';

export const IconYoutube: FC<IconProps> = (props) => {
  const width = props?.width ? props?.width : '32';
  const height = props?.height ? props?.height : '32';
  const color = props?.color ? props?.color : '#fff';
  const subFillColor = props?.subFillColor ? props?.subFillColor : '#424242';
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="16" fill={subFillColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2166 10.6144C22.9202 10.8044 23.4732 11.3588 23.6601 12.0616C24.0002 13.337 24.0002 15.9998 24.0002 15.9998C24.0002 15.9998 24.0002 18.6625 23.6601 19.9379C23.4706 20.6433 22.9176 21.1977 22.2166 21.3851C20.9444 21.7261 15.8402 21.7261 15.8402 21.7261C15.8402 21.7261 10.7386 21.7261 9.4638 21.3851C8.76022 21.1951 8.20722 20.6407 8.02029 19.9379C7.68018 18.6625 7.68018 15.9998 7.68018 15.9998C7.68018 15.9998 7.68018 13.337 8.02029 12.0616C8.20981 11.3562 8.76281 10.8018 9.4638 10.6144C10.7386 10.2734 15.8402 10.2734 15.8402 10.2734C15.8402 10.2734 20.9444 10.2734 22.2166 10.6144ZM18.4494 15.9998L14.2098 18.4543V13.5453L18.4494 15.9998Z"
        fill={color}
      />
    </svg>
  );
};
