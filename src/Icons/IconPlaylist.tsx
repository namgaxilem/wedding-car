import type { FC, HTMLAttributes } from 'react';

export type IconPlaylistProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconPlaylist: FC<IconPlaylistProps | any> = (props: any) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:hidden"
    >
      <path
        {...props}
        d="M3.5 15.8847V14.3848H11.0096V15.8847H3.5ZM3.5 11.8847V10.3848H14.9808V11.8847H3.5ZM3.5 7.88472V6.38477H14.9808V7.88472H3.5ZM16.2212 20.5001V13.529L21.5096 17.0193L16.2212 20.5001Z"
      />
    </svg>
  );
};
