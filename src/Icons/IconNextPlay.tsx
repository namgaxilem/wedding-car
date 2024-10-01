import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconNextPlay: FC<IconArrowProps | any> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.29688 17.3067V6.69141L11.2583 11.9991L3.29688 17.3067ZM12.7392 17.3067V6.69141L20.7006 11.9991L12.7392 17.3067Z"
        fill="white"
        fillOpacity="0.5"
        {...props}
      />
    </svg>
  );
};
