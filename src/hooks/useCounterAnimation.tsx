import { useEffect, useRef, useState } from 'react';

export const useCounterAnimation = (target: number, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 30);

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.7
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [target, hasStarted]);

  return { count, elementRef, displayValue: count + suffix };
};
