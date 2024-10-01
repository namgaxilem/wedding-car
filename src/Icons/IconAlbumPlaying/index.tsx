import styles from './styles.module.css';

export default function IconAlbumPlaying({ className }) {
  return (
    <div className={`${styles.boxContainer} ${className}`}>
      <div className={`${styles.box} ${styles.box1}`}></div>
      <div className={`${styles.box} ${styles.box2}`}></div>
      <div className={`${styles.box} ${styles.box3}`}></div>
      <div className={`${styles.box} ${styles.box4}`}></div>
      <div className={`${styles.box} ${styles.box5}`}></div>
    </div>
  );
}
