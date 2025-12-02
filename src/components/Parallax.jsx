'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.scss';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

// No image imports needed; using direct paths.

export default function ParallaxGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>

      <div ref={gallery} className={styles.gallery}>
        {/* Column 1 */}
        <motion.div className={styles.column} style={{ y: 0 }}> {/* Temporarily set y to 0 to check if images appear */}
          <div className={styles.imageContainer}>
            <img src="/images/1.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/2.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/3.jpg" alt="gallery" className={styles.img} />
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div className={styles.column} style={{ y: 0 }}> {/* Temporarily set y to 0 */}
          <div className={styles.imageContainer}>
            <img src="/images/4.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/5.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/6.jpg" alt="gallery" className={styles.img} />
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div className={styles.column} style={{ y: 0 }}> {/* Temporarily set y to 0 */}
          <div className={styles.imageContainer}>
            <img src="/images/7.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/8.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/9.jpg" alt="gallery" className={styles.img} />
          </div>
        </motion.div>

        {/* Column 4 */}
        <motion.div className={styles.column} style={{ y: 0 }}> {/* Temporarily set y to 0 */}
          <div className={styles.imageContainer}>
            <img src="/images/10.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/11.jpg" alt="gallery" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/12.jpg" alt="gallery" className={styles.img} />
          </div>
        </motion.div>
      </div>

      <div className={styles.spacer}></div>
    </main>
  );
}
