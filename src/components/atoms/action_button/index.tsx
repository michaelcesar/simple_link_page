import styles from './action_button.module.css';

interface ActionButtonProps {
  text: string;
}

export default function ActionButton({ text }: ActionButtonProps) {
  return <button className={styles.wrapper}>{text}</button>;
}
