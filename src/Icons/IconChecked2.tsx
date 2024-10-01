import { IconProps } from '@/app/models/utils';
import type { FC } from 'react';

const IconChecked2: FC<IconProps> = (props) => {
  const width = props.width ? props.width : 24;
  const height = props.height ? props.height : 24;
  const color = props.color ? props.color : '#424242';
  const viewBoxWidth = props.viewBoxWidth ? props.viewBoxWidth : 24;
  const viewBoxHeigh = props.viewBoxHeight ? props.viewBoxHeight : 24;
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeigh}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M9.55042 17.6554L4.21582 12.3208L5.28505 11.2516L9.55042 15.5169L18.7158 6.35156L19.785 7.42076L9.55042 17.6554Z"
        fill={color}
      />
    </svg>
  );
};

export default IconChecked2;
