import React from 'react'
import type { FC } from 'react';
import { IconProps } from '../app/models/utils';

export const IconDelete: FC<IconProps> = (props) => {
  const width = props.width ? props.width : 16;
  const height = props.height ? props.height : 16;
  const color = props.color ? props.color : 'white';
  const viewboxwidth = props.viewBoxWidth ? props.viewBoxWidth : 16;
  const viewboxheight = props.viewBoxHeight ? props.viewBoxHeight : 16;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewboxwidth} ${viewboxheight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.3077 17.5017C2.80898 17.5017 2.38302 17.3251 2.02982 16.9719C1.67661 16.6187 1.5 16.1928 1.5 15.694V3.00176H0.5V1.50179H4.99997V0.617188H11V1.50179H15.5V3.00176H14.5V15.694C14.5 16.1992 14.325 16.6267 13.975 16.9767C13.625 17.3267 13.1974 17.5017 12.6922 17.5017H3.3077ZM13 3.00176H2.99997V15.694C2.99997 15.7838 3.02883 15.8575 3.08652 15.9152C3.14423 15.9729 3.21795 16.0018 3.3077 16.0018H12.6922C12.7692 16.0018 12.8397 15.9697 12.9038 15.9056C12.9679 15.8415 13 15.771 13 15.694V3.00176ZM5.40385 14.0018H6.90382V5.00176H5.40385V14.0018ZM9.09613 14.0018H10.5961V5.00176H9.09613V14.0018Z"
        fill={color}
      />
    </svg>
  );
};
