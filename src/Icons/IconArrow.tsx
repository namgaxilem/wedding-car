import type { FC, HTMLAttributes } from 'react';
export type IconArrowProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconArrow: FC<IconArrowProps | any> = (props) => {
  return (
    <svg
      color='#9E9E9E'
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.39953 17.6534L8.3457 16.5995L12.9457 11.9995L8.3457 7.39953L9.39953 6.3457L15.0534 11.9995L9.39953 17.6534Z"
        fill="currentColor"
      />
    </svg>
  );
};
