import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { title } from 'process';

interface ImageWithTextOverlayProps {
  src: StaticImageData;
  alt: string;
  title: ReactNode;
}

const ImageWithTextOverlay: React.FC<ImageWithTextOverlayProps> = ({ src, alt, title }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "100%" }}> {/* 9:16 Aspect Ratio */}
      <Image
        src={src}
        quality={100}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div
        className="prose mt-4 text-lg text-black font-space"
        style={{
          position: "absolute",
          bottom: "20px", // Adjust as per your preference
          zIndex: "1", // To make sure the text appears above the image
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust background color and opacity as needed
          padding: "10px", // Adjust padding as needed
        }}
      >
         {title}
    </div>
    </div>
  );
}

export default ImageWithTextOverlay;