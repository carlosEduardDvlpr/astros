import styles from './preload.module.css';

export default function Preload({ className }: { className?: string }) {
  return (
    <div className={`${styles.preload} ${className}`}>
      <p>Carregando sua experiência ...</p>
    </div>
  );
}
