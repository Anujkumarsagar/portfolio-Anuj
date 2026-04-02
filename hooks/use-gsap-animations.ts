import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options?: gsap.TweenVars & { trigger?: Element | string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
          markers: false,
        },
        ...options,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [options]);

  return ref;
}

export function useScrollParallax(intensity = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: (i, target) => {
        return gsap.utils.unitize(window.innerHeight * intensity);
      },
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [intensity]);

  return ref;
}

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const text = ref.current;
    const words = text.querySelectorAll('span');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
}

export function useStaggerItems(staggerDelay = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll('[data-animate]');

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [staggerDelay]);

  return ref;
}

export function useCountUp(
  endValue: number,
  duration = 2,
  prefix = '',
  suffix = ''
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const counterObj = { value: 0 };

    gsap.to(counterObj, {
      value: endValue,
      duration,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        scrub: 0.5,
        markers: false,
      },
      onUpdate() {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(counterObj.value)}${suffix}`;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [endValue, duration, prefix, suffix]);

  return ref;
}

export function useHoverScale() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: 1.05, duration: 0.3 });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.3 });
    });

    return () => {
      element.removeEventListener('mouseenter', () => {});
      element.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return ref;
}
