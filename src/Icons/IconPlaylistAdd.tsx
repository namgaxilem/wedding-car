import type { FC, HTMLAttributes } from 'react';

export type IconPlaylistAddProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconPlaylistAdd: FC<IconPlaylistAddProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.25 15.75v-1.5h7v1.5h-7zm0-4v-1.5h11v1.5h-11zm0-4v-1.5h11v1.5h-11zm13 12v-4h-4v-1.5h4v-4h1.5v4h4v1.5h-4v4h-1.5z"
        fill="#424242"
      />
    </svg>
  );
};
