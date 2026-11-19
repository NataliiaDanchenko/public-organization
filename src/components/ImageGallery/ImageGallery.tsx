
'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './ImageGallery.module.scss';

type ImageGalleryProps = {
  images: StaticImageData[];
  title: string;
  imageType: string;
};

export function ImageGallery({
  images,
  title,
  imageType,
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const isPoster = imageType === 'Poster';

  const thumbnailClass = `${styles.thumbnail} ${
    isPoster ? styles.poster : styles.photo
  }`;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={styles.imageButton}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image}
              alt={`${imageType} ${index + 1}`}
              width={600}
              height={800}
              className={thumbnailClass}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.overlay}
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <div
            className={styles.slider}
            onClick={(event) => event.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              initialSlide={activeIndex}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              onSlideChange={(swiper: SwiperInstance) =>
                setActiveIndex(swiper.activeIndex)
              }
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.slide}>
                    <Image
                      src={image}
                      alt={`${imageType} ${index + 1}`}
                      width={1400}
                      height={1000}
                      sizes="90vw"
                      className={styles.fullImage}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <p className={styles.counter}>
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
