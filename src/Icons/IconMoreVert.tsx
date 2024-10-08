import type { FC, HTMLAttributes } from 'react';
export type IconMoreVertProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconMoreVert: FC<IconMoreVertProps> = (props) => {
  return (
    <svg
      color="#424242"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 19.269c-.412 0-.766-.147-1.06-.44a1.444 1.444 0 01-.44-1.06c0-.413.147-.766.44-1.06.294-.293.648-.44 1.06-.44.412 0 .766.147 1.06.44.293.294.44.647.44 1.06 0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44zm0-5.77c-.412 0-.766-.146-1.06-.44a1.445 1.445 0 01-.44-1.06c0-.412.147-.765.44-1.059.294-.293.648-.44 1.06-.44.412 0 .766.146 1.06.44.293.294.44.647.44 1.06 0 .412-.147.765-.44 1.059-.294.294-.648.44-1.06.44zm0-5.769c-.412 0-.766-.146-1.06-.44a1.444 1.444 0 01-.44-1.06c0-.412.147-.765.44-1.059.294-.294.648-.44 1.06-.44.412 0 .766.146 1.06.44.293.294.44.647.44 1.06 0 .412-.147.765-.44 1.059-.294.294-.648.44-1.06.44z"
        fill="currentColor"
      />
    </svg>
  );
};
