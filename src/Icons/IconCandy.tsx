import type { FC, HTMLAttributes } from 'react';

export type IconCandy = object & HTMLAttributes<HTMLOrSVGElement>;

export const IconCandy: FC<IconCandy | any> = (props: any) => {
  return (
    <>
      {props.golden === true ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 18.5L5.25 15.5L5.75 9.5L2.5 6.5C0.5 6.5 1.08333 9 1.75 10.5C0.55 11.7 1.08333 14.1667 1.75 15C0.55 15.8 1.25 17.6667 1.75 18.5Z"
            fill="#FFF2AD"
          />
          <path
            d="M22 6.5L18.5 9.5L18 15.5L22 18.5C24 18.5 23.1667 15.5 22.5 14C23.7 12.8 22.6667 10.8333 22 10C23.2 9.2 22.5 7.33333 22 6.5Z"
            fill="#FFF2AD"
          />
          <ellipse cx="12" cy="12.5" rx="7" ry="7.5" fill="#FFF2AD" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4986 8.24691C23.4986 8.99878 23.2381 9.72181 22.7708 10.2977C23.2381 10.8737 23.4986 11.5967 23.4977 12.3495C23.4977 13.1149 23.2294 13.8465 22.7487 14.4263C23.2111 15.0003 23.4688 15.7195 23.4688 16.4666C23.4688 17.4223 23.0506 18.3261 22.3218 18.9462C22.2208 19.0328 22.0968 19.0751 21.9728 19.0751C21.8478 19.0751 21.7218 19.0308 21.6209 18.9433L18.4961 16.2377C17.199 18.4838 14.7732 20 11.9984 20C9.21107 20 6.77565 18.4703 5.48343 16.207L2.39709 18.9491C2.29517 19.0395 2.16729 19.0847 2.03942 19.0847C1.91635 19.0847 1.79328 19.0424 1.69329 18.9587C0.96064 18.3434 0.535667 17.4425 0.528937 16.4868C0.52413 15.7339 0.778921 15.0099 1.24235 14.4302C0.771229 13.8571 0.505862 13.136 0.500093 12.3841C0.494324 11.6188 0.757769 10.8862 1.23466 10.3025C0.768345 9.73143 0.505862 9.01417 0.500093 8.2671C0.493362 7.31235 0.904874 6.40472 1.62887 5.7788C1.82982 5.60573 2.12787 5.60477 2.32978 5.77687L5.61034 8.57766C6.93141 6.4326 9.30145 5 11.9994 5C14.7107 5 17.0913 6.44702 18.4086 8.60938L21.6487 5.77207C21.8487 5.59612 22.1487 5.59419 22.3516 5.76726C23.0804 6.38741 23.4986 7.2912 23.4986 8.24691ZM19.4643 13.2052C19.3979 13.9139 19.2316 14.5936 18.9806 15.232L21.9401 17.7953C22.2314 17.4175 22.3929 16.9512 22.3929 16.4656C22.3929 15.8387 22.1218 15.2407 21.6487 14.8263C21.6478 14.8244 21.6459 14.8234 21.6439 14.8215C21.6372 14.8167 21.6324 14.8109 21.6266 14.8051L19.621 13.0678L19.4643 13.2052ZM11.9994 18.9222C14.53 18.9222 16.7231 17.4502 17.7692 15.3176C18.0163 14.8138 18.199 14.2725 18.3066 13.7052C18.322 13.6264 18.3364 13.5466 18.3489 13.4668C18.3874 13.2129 18.4095 12.9543 18.4172 12.6918C18.4177 12.6754 18.4183 12.6591 18.4188 12.6429C18.4204 12.5951 18.422 12.5476 18.422 12.4995C18.422 12.3351 18.4143 12.1726 18.4018 12.0121C18.3413 11.2044 18.1317 10.4381 17.799 9.74104C16.7644 7.5758 14.554 6.07589 11.9994 6.07589C9.45336 6.07589 7.2487 7.56426 6.2103 9.71701C5.87475 10.4131 5.66322 11.1794 5.5988 11.9871C5.58534 12.1563 5.57669 12.3265 5.57669 12.4986C5.57669 12.5544 5.57855 12.6092 5.58044 12.665L5.58054 12.6678C5.58727 12.9264 5.60842 13.1802 5.64495 13.4302C5.65008 13.4655 5.65606 13.5007 5.66205 13.536C5.66504 13.5536 5.66803 13.5712 5.67091 13.5889C5.77379 14.1917 5.96128 14.7676 6.22088 15.3013C7.26408 17.4425 9.46202 18.9222 11.9994 18.9222ZM1.60579 16.4781C1.60868 16.9627 1.77309 17.4261 2.06634 17.8021L5.00269 15.1945C4.75847 14.5628 4.59695 13.8908 4.53253 13.1899L4.38638 13.0649L3.97295 12.712L3.55951 12.3591L2.03076 11.0535L2.01923 11.0438C1.73078 11.4236 1.57214 11.8909 1.57599 12.3765C1.58079 13.0043 1.85577 13.5994 2.33171 14.011L2.33844 14.0167C2.36728 14.0408 2.39228 14.0677 2.41439 14.0965C2.48554 14.1888 2.52496 14.3023 2.52592 14.4206C2.52689 14.5763 2.46054 14.7244 2.34421 14.8273C2.30767 14.8599 2.27306 14.8936 2.2394 14.9272C1.83174 15.3388 1.60195 15.8955 1.60579 16.4781ZM4.57387 11.4573C4.66713 10.7929 4.84597 10.1554 5.10172 9.5574L2.01826 6.92584C1.72982 7.30562 1.57118 7.7729 1.57502 8.25845C1.57983 8.88629 1.85481 9.48144 2.33074 9.89296C2.33459 9.89632 2.3382 9.89969 2.3418 9.90305C2.34541 9.90642 2.34901 9.90978 2.35286 9.91315L4.37196 11.6361L4.57387 11.4573ZM22.4218 8.24691C22.4218 7.76136 22.2612 7.29697 21.9708 6.91911L18.9124 9.59682C19.1624 10.1891 19.3354 10.8198 19.4258 11.4765L19.6162 11.6409L20.0267 11.9967L20.4373 12.3524L21.9574 13.6687L21.9689 13.6783C22.2602 13.3004 22.4218 12.8341 22.4218 12.3486C22.4218 11.7217 22.1506 11.1236 21.6776 10.7092C21.6468 10.6833 21.6199 10.6535 21.5968 10.6218C21.5286 10.5295 21.4891 10.416 21.4891 10.3006C21.4891 10.1449 21.5536 9.99391 21.6709 9.89199C21.7083 9.8593 21.743 9.82661 21.7776 9.792C22.1881 9.38337 22.4218 8.8286 22.4218 8.24691Z"
            fill="#EAD66C"
          />
          <path
            d="M12.0139 10.4003C12.9023 9.28495 14.1214 9.38879 14.8714 9.8801C15.8377 10.5137 16.1752 11.8627 15.6435 12.9616C15.3675 13.5318 14.955 13.9991 14.4897 14.4154C13.8594 14.9801 13.2167 15.53 12.5741 16.0798L12.3552 16.2672C12.1264 16.4633 11.8985 16.4826 11.6879 16.296C11.5045 16.1338 11.3205 15.9722 11.1365 15.8105L11.1361 15.8102C10.4039 15.167 9.67129 14.5234 8.97369 13.8443C8.39681 13.2818 8.0699 12.5703 8.1074 11.7252C8.17374 10.232 9.5775 9.18399 10.939 9.63493C11.1447 9.70319 11.3437 9.81568 11.5206 9.9426C11.6439 10.031 11.7523 10.14 11.8642 10.2526L11.8642 10.2526C11.9129 10.3016 11.9623 10.3513 12.0139 10.4003Z"
            fill="#C93636"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4986 8.24691C23.4986 8.99878 23.2381 9.72181 22.7708 10.2977C23.2381 10.8737 23.4986 11.5967 23.4977 12.3495C23.4977 13.1149 23.2294 13.8465 22.7487 14.4263C23.2111 15.0003 23.4688 15.7195 23.4688 16.4666C23.4688 17.4223 23.0506 18.3261 22.3218 18.9462C22.2208 19.0328 22.0968 19.0751 21.9728 19.0751C21.8478 19.0751 21.7218 19.0308 21.6209 18.9433L18.4961 16.2377C17.199 18.4838 14.7732 20 11.9984 20C9.21107 20 6.77565 18.4703 5.48343 16.207L2.39709 18.9491C2.29517 19.0395 2.16729 19.0847 2.03942 19.0847C1.91635 19.0847 1.79328 19.0424 1.69329 18.9587C0.96064 18.3434 0.535667 17.4425 0.528937 16.4868C0.52413 15.7339 0.778921 15.0099 1.24235 14.4302C0.771229 13.8571 0.505862 13.136 0.500093 12.3841C0.494324 11.6188 0.757769 10.8862 1.23466 10.3025C0.768345 9.73143 0.505862 9.01417 0.500093 8.2671C0.493362 7.31235 0.904874 6.40472 1.62887 5.7788C1.82982 5.60573 2.12787 5.60477 2.32978 5.77687L5.61034 8.57766C6.93141 6.4326 9.30145 5 11.9994 5C14.7107 5 17.0913 6.44702 18.4086 8.60938L21.6487 5.77207C21.8487 5.59612 22.1487 5.59419 22.3516 5.76726C23.0804 6.38741 23.4986 7.2912 23.4986 8.24691ZM19.4643 13.2052C19.3979 13.9139 19.2316 14.5936 18.9806 15.232L21.9401 17.7953C22.2314 17.4175 22.3929 16.9512 22.3929 16.4656C22.3929 15.8387 22.1218 15.2407 21.6487 14.8263C21.6478 14.8244 21.6459 14.8234 21.6439 14.8215C21.6372 14.8167 21.6324 14.8109 21.6266 14.8051L19.621 13.0678L19.4643 13.2052ZM11.9994 18.9222C14.53 18.9222 16.7231 17.4502 17.7692 15.3176C18.0163 14.8138 18.199 14.2725 18.3066 13.7052C18.322 13.6264 18.3364 13.5466 18.3489 13.4668C18.3874 13.2129 18.4095 12.9543 18.4172 12.6918C18.4177 12.6754 18.4183 12.6591 18.4188 12.6429C18.4204 12.5951 18.422 12.5476 18.422 12.4995C18.422 12.3351 18.4143 12.1726 18.4018 12.0121C18.3413 11.2044 18.1317 10.4381 17.799 9.74104C16.7644 7.5758 14.554 6.07589 11.9994 6.07589C9.45336 6.07589 7.2487 7.56426 6.2103 9.71701C5.87475 10.4131 5.66322 11.1794 5.5988 11.9871C5.58534 12.1563 5.57669 12.3265 5.57669 12.4986C5.57669 12.5544 5.57855 12.6092 5.58044 12.665L5.58054 12.6678C5.58727 12.9264 5.60842 13.1802 5.64495 13.4302C5.65008 13.4655 5.65606 13.5007 5.66205 13.536C5.66504 13.5536 5.66803 13.5712 5.67091 13.5889C5.77379 14.1917 5.96128 14.7676 6.22088 15.3013C7.26408 17.4425 9.46202 18.9222 11.9994 18.9222ZM1.60579 16.4781C1.60868 16.9627 1.77309 17.4261 2.06634 17.8021L5.00269 15.1945C4.75847 14.5628 4.59695 13.8908 4.53253 13.1899L4.38638 13.0649L3.97295 12.712L3.55951 12.3591L2.03076 11.0535L2.01923 11.0438C1.73078 11.4236 1.57214 11.8909 1.57599 12.3765C1.58079 13.0043 1.85577 13.5994 2.33171 14.011L2.33844 14.0167C2.36728 14.0408 2.39228 14.0677 2.41439 14.0965C2.48554 14.1888 2.52496 14.3023 2.52592 14.4206C2.52689 14.5763 2.46054 14.7244 2.34421 14.8273C2.30767 14.8599 2.27306 14.8936 2.2394 14.9272C1.83174 15.3388 1.60195 15.8955 1.60579 16.4781ZM4.57387 11.4573C4.66713 10.7929 4.84597 10.1554 5.10172 9.5574L2.01826 6.92584C1.72982 7.30562 1.57118 7.7729 1.57502 8.25845C1.57983 8.88629 1.85481 9.48144 2.33074 9.89296C2.33459 9.89632 2.3382 9.89969 2.3418 9.90305C2.34541 9.90642 2.34901 9.90978 2.35286 9.91315L4.37196 11.6361L4.57387 11.4573ZM22.4218 8.24691C22.4218 7.76136 22.2612 7.29697 21.9708 6.91911L18.9124 9.59682C19.1624 10.1891 19.3354 10.8198 19.4258 11.4765L19.6162 11.6409L20.0267 11.9967L20.4373 12.3524L21.9574 13.6687L21.9689 13.6783C22.2602 13.3004 22.4218 12.8341 22.4218 12.3486C22.4218 11.7217 22.1506 11.1236 21.6776 10.7092C21.6468 10.6833 21.6199 10.6535 21.5968 10.6218C21.5286 10.5295 21.4891 10.416 21.4891 10.3006C21.4891 10.1449 21.5536 9.99391 21.6709 9.89199C21.7083 9.8593 21.743 9.82661 21.7776 9.792C22.1881 9.38337 22.4218 8.8286 22.4218 8.24691ZM12.0139 10.4016C12.9023 9.28629 14.1214 9.39013 14.8714 9.88144C15.8377 10.5151 16.1752 11.864 15.6435 12.963C15.3675 13.5331 14.955 14.0004 14.4897 14.4167C13.8594 14.9814 13.2167 15.5313 12.5741 16.0812C12.5012 16.1436 12.4282 16.2061 12.3552 16.2685C12.1264 16.4647 11.8985 16.4839 11.6879 16.2974C11.5044 16.1351 11.3203 15.9733 11.1361 15.8116C10.4039 15.1683 9.67129 14.5248 8.97369 13.8456C8.39681 13.2831 8.0699 12.5717 8.1074 11.7265C8.17374 10.2333 9.5775 9.18534 10.939 9.63627C11.1447 9.70453 11.3437 9.81703 11.5206 9.94394C11.6439 10.0324 11.7523 10.1414 11.8642 10.254C11.9129 10.303 11.9623 10.3526 12.0139 10.4016Z"
            fill="#B14C59"
            {...props}
          />
        </svg>
      )}
    </>
  );
};
