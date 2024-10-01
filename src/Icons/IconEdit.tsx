import { IconProps } from '@/app/models/utils';
import { FC } from 'react';

const IconEdit: FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="Edit">
        <path
          id="Vector"
          d="M5.49997 19H6.7615L16.9981 8.7634L15.7366 7.50188L5.49997 17.7385V19ZM4 20.5V17.1154L17.1904 3.93078C17.3416 3.79343 17.5086 3.68729 17.6913 3.61237C17.874 3.53746 18.0656 3.5 18.2661 3.5C18.4666 3.5 18.6608 3.53558 18.8488 3.60675C19.0368 3.6779 19.2032 3.79103 19.348 3.94615L20.5692 5.18268C20.7243 5.32754 20.8349 5.49424 20.9009 5.68278C20.9669 5.87129 21 6.05981 21 6.24833C21 6.44941 20.9656 6.64131 20.8969 6.82403C20.8283 7.00676 20.719 7.17373 20.5692 7.32495L7.38458 20.5H4ZM16.3563 8.1437L15.7366 7.50188L16.9981 8.7634L16.3563 8.1437Z"
          fill={props.color ? props.color : '#666666'}
        />
      </g>
    </svg>
  );
};

export default IconEdit;
