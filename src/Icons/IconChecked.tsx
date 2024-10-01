import type { FC, HTMLAttributes } from 'react';

export type IconCheckedProps = {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
} & HTMLAttributes<HTMLOrSVGElement>;

const IconChecked: FC<IconCheckedProps> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="Icon/Done">
        <path
          id="Vector"
          d="M10.0504 17.6534L4.71582 12.3188L5.78505 11.2496L10.0504 15.515L19.2158 6.34961L20.285 7.41881L10.0504 17.6534Z"
          fill={props.color || '#B14C59'}
        />
      </g>
    </svg>
  );
};

export default IconChecked;
