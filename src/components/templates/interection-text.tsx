import { useEffect, useRef, useState } from 'react';

interface InteractionTextProps {
  texts: string[];
  delay: number;
}

function InteractionText({ texts, delay }: InteractionTextProps) {
  const [_, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollAnimation = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % texts.length;
        if (nextIndex === 0) {
          scrollRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current?.scrollBy({ top: 44, behavior: 'smooth' });
        }
        return nextIndex;
      });
    }, delay);

    return () => clearInterval(scrollAnimation);
  }, [delay, texts.length]);

  return (
    <div
      ref={scrollRef}
      className="flex max-h-9 flex-col gap-2 overflow-y-hidden"
    >
      {texts.map((text: string, index: number) => (
        <h1 key={index} className="text-3xl font-bold">
          {text}
        </h1>
      ))}
    </div>
  );
}

export { InteractionText };
