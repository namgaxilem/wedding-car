import type { FC, HTMLAttributes } from 'react';

export type IconPersonProps = {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
} & HTMLAttributes<HTMLOrSVGElement>;

const IconPerson: FC<IconPersonProps> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="Icon/Person Fill">
        <path
          id="Vector"
          d="M12.666 11.6923C11.7035 11.6923 10.8796 11.3496 10.1941 10.6642C9.50872 9.97879 9.16602 9.15484 9.16602 8.19236C9.16602 7.22986 9.50872 6.40591 10.1941 5.72051C10.8796 5.03509 11.7035 4.69238 12.666 4.69238C13.6285 4.69238 14.4524 5.03509 15.1378 5.72051C15.8233 6.40591 16.166 7.22986 16.166 8.19236C16.166 9.15484 15.8233 9.97879 15.1378 10.6642C14.4524 11.3496 13.6285 11.6923 12.666 11.6923ZM5.16602 19.3077V17.0846C5.16602 16.5949 5.29903 16.1414 5.56507 15.7241C5.83108 15.3068 6.18652 14.986 6.63139 14.7616C7.61986 14.277 8.61697 13.9135 9.62274 13.6712C10.6285 13.4289 11.6429 13.3078 12.666 13.3078C13.6891 13.3078 14.7035 13.4289 15.7092 13.6712C16.715 13.9135 17.7121 14.277 18.7006 14.7616C19.1455 14.986 19.5009 15.3068 19.7669 15.7241C20.0329 16.1414 20.166 16.5949 20.166 17.0846V19.3077H5.16602Z"
          fill={props.color ? props.color : '#CACACA'}
        />
      </g>
    </svg>
  );
};

export default IconPerson;
