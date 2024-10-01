import { IconProps } from '@/app/models/utils';
import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconLyric2: FC<IconProps> = (props) => {
  const width = props.width ? props.width : 16;
  const height = props.height ? props.height : 16;
  const color = props.color ? props.color : '#9E9E9E';
  const viewBoxWidth = props.viewBoxWidth ? props.viewBoxWidth : 18;
  const viewBoxHeigh = props.viewBoxHeight ? props.viewBoxHeight : 16;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeigh}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.42341 13.8336H13.5772C13.652 13.8336 13.7134 13.8096 13.7615 13.7615C13.8096 13.7134 13.8336 13.652 13.8336 13.5772V6.09966L9.90095 2.16697H2.42341C2.34862 2.16697 2.28718 2.19101 2.2391 2.2391C2.19101 2.28718 2.16697 2.34862 2.16697 2.42341V13.5772C2.16697 13.652 2.19101 13.7134 2.2391 13.7615C2.28718 13.8096 2.34862 13.8336 2.42341 13.8336ZM2.42341 15.0836C2.00781 15.0836 1.65285 14.9364 1.35851 14.6421C1.06417 14.3478 0.916992 13.9928 0.916992 13.5772V2.42341C0.916992 2.00781 1.06417 1.65285 1.35851 1.35851C1.65285 1.06417 2.00781 0.916992 2.42341 0.916992H10.4122L15.0836 5.58845V13.5772C15.0836 13.9928 14.9364 14.3478 14.6421 14.6421C14.3478 14.9364 13.9928 15.0836 13.5772 15.0836H2.42341ZM4.04199 11.7503H11.9586V10.5003H4.04199V11.7503ZM4.04199 8.62528H11.9586V7.37533H4.04199V8.62528ZM4.04199 5.50031H9.34643V4.25033H4.04199V5.50031Z"
        fill={color}
      />
    </svg>
  );
};
