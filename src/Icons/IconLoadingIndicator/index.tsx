import styles from './styles.module.css';

interface Props {
  className?: string;
}
export default function IconLoadingIndicator({ className }: Props) {
  return (
    <>
      <span className={`${styles.loader} ${className}`}></span>
    </>
  );
}
