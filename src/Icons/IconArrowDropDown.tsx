import { IconProps } from "@/app/models/utils";
import type { FC } from 'react';

export const IconArrowDropDown: FC<IconProps> = (props) => {
  const width = props.width ? props.width : 20;
  const height = props.height ? props.height : 20;
  const color = props.color ? props.color : '#666666';
  const viewBoxWidth = props.viewBoxWidth ? props.viewBoxWidth : 20;
  const viewBoxHeigh = props.viewBoxHeight ? props.viewBoxHeight : 20;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeigh}`}
      fill="none"
      {...props}
    >
      <path d="M9.998 12.211l-3.67-3.67h7.34l-3.67 3.67z" fill={color} />
    </svg>
  );
};
