import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

// Parses "5,000+" -> { prefix: "", number: 5000, suffix: "+" }
function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1] ?? "",
    number: parseInt(match[2].replace(/,/g, ""), 10) || 0,
    suffix: match[3] ?? "",
  };
}

function formatNumber(n: number, target: number) {
  // Preserve comma formatting when target has commas
  return target >= 1000 ? Math.round(n).toLocaleString("en-US") : String(Math.round(n));
}

export function CountUp({ value, duration = 1800, className }: Props) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(number * eased);
              if (t < 1) requestAnimationFrame(animate);
              else setDisplay(number);
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [number, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(display, number)}
      {suffix}
    </span>
  );
}
