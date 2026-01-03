import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    
    const currentWord = words[currentWordIndex];
    if (!currentWord) return;

    const timeout = setTimeout(
      () => {
        try {
          if (!isDeleting) {
            // Typing
            if (currentText.length < currentWord.length) {
              setCurrentText(currentWord.slice(0, currentText.length + 1));
            } else {
              // Finished typing, wait then start deleting
              setTimeout(() => setIsDeleting(true), delayBetweenWords);
            }
          } else {
            // Deleting
            if (currentText.length > 0) {
              setCurrentText(currentText.slice(0, -1));
            } else {
              // Finished deleting, move to next word
              setIsDeleting(false);
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        } catch (error) {
          console.error('Typewriter error:', error);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="gradient-text">
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

export default Typewriter;
