'use client';

import { useState } from 'react';
import Words from '@/components/atoms/words';
import styles from './link.module.css';

interface LinkProps {
  tag: string;
  texts: string[];
  subtitle: string;
  imageUrl: string;
  hoverContent?: JSX.Element;
  defaultContent?: JSX.Element;
  simpleTitle?: boolean;
  title?: JSX.Element;
}

export default function Link({
  tag,
  texts,
  subtitle,
  imageUrl,
  hoverContent,
  defaultContent,
  simpleTitle = false,
  title
}: LinkProps) {
  const [, setIsHovered] = useState(false);

  return (
    <aside
      className={styles.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className={`${styles.defaultContent}`}>{defaultContent}</div>
        <div className={`${styles.hoverContent}`}>{hoverContent}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.tag}>{tag}</div>
        {simpleTitle ? <div>{title}</div> : <Words texts={texts} />}
        <div className={styles.textBox}>
          <p>{subtitle}</p>
        </div>
      </div>
    </aside>
  );
}
