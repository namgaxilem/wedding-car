import { HTMLAttributes, FC } from 'react';

export type IconKakaoProps = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconKakao: FC<IconKakaoProps> = (props) => {
  return (
    <svg {...props} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.498 3.87012C6.84901 3.87012 2.26953 7.38855 2.26953 11.7254C2.26953 14.5493 4.20951 17.0257 7.12259 18.409C6.90808 19.1851 6.34847 21.2207 6.23654 21.6556C6.09664 22.1962 6.44173 22.1901 6.66558 22.0422C6.84279 21.9274 9.46985 20.1938 10.6015 19.4449C11.2171 19.5324 11.8513 19.5808 12.5011 19.5808C18.15 19.5808 22.7295 16.0623 22.7295 11.7254C22.7264 7.38855 18.1469 3.87012 12.498 3.87012Z"
        fill="#381F1F"
      />
    </svg>
  );
};
