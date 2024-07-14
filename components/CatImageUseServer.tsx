// import { useEffect, useState } from 'react';
import Image from 'next/image';

const getCatImages = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatImageUseServer = async () => {
  const catImages: CatImage[] = await getCatImages();

  return (
    <div>
      <h1>Cat images</h1>
      {catImages.length > 0 ? (
        catImages.map((image, index) => (

          <div key={index}>
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt='cat image'
            />
          </div>
        ))
      ) : (
        <p>image</p>
      )}
    </div>
  );
};

export default CatImageUseServer;