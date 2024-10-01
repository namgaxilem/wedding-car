import type { FC, HTMLAttributes } from 'react';

export type IconPlayProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconPlay: FC<IconPlayProps | any> = (props: any) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path {...props} d="M8.5 18.096V5.90381L18.0768 11.9999L8.5 18.096Z" />
    </svg>
  );
};
