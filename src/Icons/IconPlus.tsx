import type { FC, HTMLAttributes } from 'react';

export type IconPlusProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconPlus: FC<IconPlusProps> = (props) => {
    return (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="white" {...props} />
        </svg>
    );
};
