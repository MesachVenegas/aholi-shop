'use client'

import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { galleryImages } from '@/utils/constants';
import Lightbox from 'react-spring-lightbox';
import LightBoxHeader from './HeaderLightBox/LightBoxHeader';

export default function GalleryViewer() {
  const [index, setIndex] = useState(-1);

  const currentImage = galleryImages[index];
  const nextIndex = (index + 1) % galleryImages.length;
  const prevIndex = (index + galleryImages.length - 1) % galleryImages.length;

  const handleClick = (index: number, item: any ) => setIndex(index);
  const handleMoveprev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  const handleClose = () => setIndex(-1);

  return (
    <>
      <Gallery
        images={galleryImages}
        rowHeight={500}
        margin={15}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {
        !!currentImage && (
          <Lightbox
            className='bg-black/90 backdrop-blur-md'
            isOpen={true}
            onPrev={handleMoveprev}
            onNext={handleMoveNext}
            onClose={handleClose}
            images={galleryImages}
            currentIndex={index}
            singleClickToZoom
            renderHeader={() => <LightBoxHeader close={handleClose}/>}
          />
        )
      }
    </>
  )
}
