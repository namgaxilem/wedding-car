import type { FC, HTMLAttributes } from 'react';

type Props = {} & HTMLAttributes<HTMLOrSVGElement>;

export const IconPause: FC<any> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.6666 43.1667V12.8335H41.4166V43.1667H32.6666ZM14.5834 43.1667V12.8335H23.3333V43.1667H14.5834Z"
        fill="white"
      />
    </svg>
  );
};
