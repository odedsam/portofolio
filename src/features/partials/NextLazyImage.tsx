'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { FALLBACK_IMAGE } from '@/config';

type LazyImageProps = {
  src: string;
  alt: string;
  placeholder?: React.ReactElement;
} & Omit<ImageProps, 'src' | 'alt'>;

const NextLazyImage = ({ src, alt, placeholder, ...rest }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && placeholder}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, 50vw"
        blurDataURL={FALLBACK_IMAGE}
        onLoad={() => setLoaded(true)}
        className={`${rest.className ?? ''} ${!loaded ? 'hidden' : ''}`}
        {...rest}
      />
    </>
  );
};

export default NextLazyImage;
