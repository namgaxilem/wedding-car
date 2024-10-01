import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconArrowDown: FC<IconArrowProps | any> = (props) => {
  const width = props.width ? props.width : 24;
  const height = props.height ? props.height : 24;
  const color = props.color ? props.color : '#FFF';
  const viewBoxWidth = props.viewBoxWidth ? props.viewBoxWidth : 40;
  const viewBoxHeigh = props.viewBoxHeight ? props.viewBoxHeight : 40;
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeigh}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0012 25.0648L10.5781 15.6418L12.0695 14.1504L20.0012 22.0991L27.9328 14.1675L29.4242 15.6589L20.0012 25.0648Z"
        fill={color}
        {...props}
      />
    </svg>
  );
};
