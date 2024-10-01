import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconPreviousPlay: FC<IconArrowProps | any> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        d="M20.7006 17.3067L12.7392 11.9991L20.7006 6.69141V17.3067ZM11.2583 17.3067L3.29688 11.9991L11.2583 6.69141V17.3067Z"
        fillOpacity="0.5"
        {...props}
      />
    </svg>
  );
};
