'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  triggerElement?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleUp';
  duration?: number;
  delay?: number;
}

const animationConfig = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
  },
  slideInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className = '',
  animation = 'slideUp',
  duration = 0.8,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const config = animationConfig[animation];

    gsap.fromTo(ref.current, config.from, {
      ...config.to,
      duration,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animation, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function TextRevealSection({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.querySelectorAll('span');

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: window.innerHeight * speed,
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
