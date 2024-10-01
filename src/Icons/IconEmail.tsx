import { IconProps } from '@/app/models/utils';
import type { FC } from 'react';

export const IconEmail: FC<IconProps> = (props) => {
  const width = props.width ? props.width : 24;
  const height = props.height ? props.height : 24;
  const color = props.color ? props.color : '#424242';
  const viewBoxWidth = props.viewBoxWidth ? props.viewBoxWidth : 24;
  const viewBoxHeigh = props.viewBoxHeight ? props.viewBoxHeight : 24;
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
        d="M4.3077 19.5C3.80257 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.3077C2.5 5.80257 2.675 5.375 3.025 5.025C3.375 4.675 3.80257 4.5 4.3077 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80257 21.5 6.3077V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.3077ZM12 12.5576L3.99998 7.44225V17.6923C3.99998 17.782 4.02883 17.8557 4.08653 17.9134C4.14423 17.9711 4.21795 18 4.3077 18H19.6923C19.782 18 19.8557 17.9711 19.9134 17.9134C19.9711 17.8557 20 17.782 20 17.6923V7.44225L12 12.5576ZM12 11L19.8461 5.99998H4.15383L12 11ZM3.99998 7.44225V5.99998V17.6923C3.99998 17.782 4.02883 17.8557 4.08653 17.9134C4.14423 17.9711 4.21795 18 4.3077 18H3.99998V7.44225Z"
        fill={color}
      />
    </svg>
  );
};
