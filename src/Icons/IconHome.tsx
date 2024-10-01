interface Props {
  onClick?: () => void;
}
export default function IconHome({ onClick }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M5.99997 18.9996H9.34615V13.0573H14.6538V18.9996H18V9.99964L12 5.48042L5.99997 9.99964V18.9996ZM4.5 20.4996V9.24967L12 3.60547L19.5 9.24967V20.4996H13.1538V14.5573H10.8461V20.4996H4.5Z"
        fill="#424242"
      />
    </svg>
  );
}
