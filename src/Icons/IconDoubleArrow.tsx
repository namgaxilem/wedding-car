import type { FC, HTMLAttributes } from 'react';

export type IconDoubleArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconDoubleArrow: FC<IconDoubleArrowProps | any> = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.378 9.997l-3.82-3.834.878-.878 4.711 4.712-4.711 4.711-.878-.878 3.82-3.833zm5.292 0L9.85 6.163l.877-.878 4.712 4.712-4.712 4.711-.878-.878 3.82-3.833z"
        fill={props.color ?? '#424242'}
      />
    </svg>
  );
};
