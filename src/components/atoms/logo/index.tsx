import Image from 'next/image';
import styles from './logo.module.css';

interface LogoProps {
  url: string;
  width: number;
  height: number;
}

export default function Logo({ url, width, height }: LogoProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={url}
        alt="imagem"
        width={width}
        height={height}
        priority={true}
      />
    </div>
  );
}
