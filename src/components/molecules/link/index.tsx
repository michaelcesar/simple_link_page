import Words from '@/components/atoms/words';
import styles from './link.module.css';

interface LinkProps {
  tag: string;
  texts: string[];
  subtitle: string;
}

export default function Link({ tag, texts, subtitle }: LinkProps) {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.banner}></div>
      <div className={styles.content}>
        <div className={styles.tag}>{tag}</div>
        <Words texts={texts}></Words>
        <p>{subtitle}</p>
      </div>
    </aside>
  );
}
