'use client';

import { useState, useEffect } from 'react';
import styles from './words.module.css';

interface WordsProps {
  texts: string[];
}

export default function Words({ texts }: WordsProps) {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    setTextIndex(0);
    setCurrentText('');
    setLetterIndex(0);
    setIsTyping(false);
    setIsErasing(false);
  }, [texts]);

  useEffect(() => {
    const currentWord = texts[textIndex];

    if (!isTyping && !isErasing) {
      const typingDelay = setTimeout(() => {
        setIsTyping(true);
      }, 500);

      return () => clearTimeout(typingDelay);
    }

    if (isTyping && letterIndex < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else if (isTyping && letterIndex === currentWord.length) {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false);
        setIsErasing(true);
      }, 2000);

      return () => clearTimeout(pauseTimeout);
    }

    if (isErasing && letterIndex > 0) {
      const erasingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setLetterIndex(letterIndex - 1);
      }, 100);

      return () => clearTimeout(erasingTimeout);
    } else if (isErasing && letterIndex === 0) {
      const nextWordTimeout = setTimeout(() => {
        setIsErasing(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setLetterIndex(0);
      }, 500);

      return () => clearTimeout(nextWordTimeout);
    }
  }, [letterIndex, textIndex, texts, isTyping, isErasing]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>
        {currentText}
        <span className={styles.cursor}></span>
      </h2>
    </div>
  );
}
