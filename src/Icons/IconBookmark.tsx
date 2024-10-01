import type { FC, HTMLAttributes } from 'react';

export type IconBookmarkProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconBookmark: FC<IconBookmarkProps | any> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        {...props}
        d="M6 19.5V5.61537C6 5.15512 6.15417 4.77083 6.4625 4.4625C6.77083 4.15417 7.15512 4 7.61537 4H16.3846C16.8449 4 17.2292 4.15417 17.5375 4.4625C17.8458 4.77083 18 5.15512 18 5.61537V19.5L12 16.9231L6 19.5Z"
      />
    </svg>
  );
};
