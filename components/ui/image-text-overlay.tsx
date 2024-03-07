import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageWithTextOverlayProps {
  src: StaticImageData;
  alt: string;
  text: string;
}

const ImageWithTextOverlay: React.FC<ImageWithTextOverlayProps> = ({ src, alt, text }) => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={src}
        quality={100}
        alt={alt}
      />
      <p
        className="prose mt-4 text-lg text-black font-space"
        style={{
          position: "absolute",
          bottom: "20px", // Adjust as per your preference
          zIndex: "1", // To make sure the text appears above the image
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust background color and opacity as needed
          padding: "10px", // Adjust padding as needed
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default ImageWithTextOverlay;