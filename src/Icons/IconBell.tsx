import type { FC, HTMLAttributes } from 'react';
export type IconBellProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconBell: FC<IconBellProps> = (props) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 18.8846V17.3846H6.3077V9.92305C6.3077 8.57818 6.72276 7.38908 7.55287 6.35575C8.38301 5.32242 9.44872 4.66153 10.75 4.37308V3.75C10.75 3.40278 10.8714 3.10765 11.1143 2.8646C11.3571 2.62153 11.6519 2.5 11.9988 2.5C12.3457 2.5 12.641 2.62153 12.8846 2.8646C13.1282 3.10765 13.25 3.40278 13.25 3.75V4.37308C14.5512 4.66153 15.6169 5.32242 16.4471 6.35575C17.2772 7.38908 17.6922 8.57818 17.6922 9.92305V17.3846H19.5V18.8846H4.5ZM11.9983 21.6923C11.5007 21.6923 11.0753 21.5153 10.7221 21.1613C10.3689 20.8073 10.1923 20.3817 10.1923 19.8846H13.8077C13.8077 20.3833 13.6305 20.8093 13.2761 21.1625C12.9218 21.5157 12.4959 21.6923 11.9983 21.6923ZM7.80765 17.3846H16.1923V9.92305C16.1923 8.76535 15.783 7.77721 14.9644 6.95863C14.1458 6.14003 13.1577 5.73073 12 5.73073C10.8423 5.73073 9.85413 6.14003 9.03555 6.95863C8.21695 7.77721 7.80765 8.76535 7.80765 9.92305V17.3846Z"
        fill="#212121"
      />
    </svg>
  );
};
