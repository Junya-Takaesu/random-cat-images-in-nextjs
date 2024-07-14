'use client';
import { useEffect, useState } from 'react';
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

const CatImageUseClient = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);

  useEffect(() => {
    const fetchedImages = async () => {
      const catImageJson = await getCatImages();
      console.log(catImageJson);

      setCatImages(catImageJson);
    };
    fetchedImages();
  }, []);

  return (
    <div>
      <h1>Cat images</h1>
      { }
      {catImages.length > 0 ? (
        catImages.map((image, index) => (

          <div key={index}>
            <Image src={image.url} alt='cat image' width={image.width} height={image.height} />
          </div>
        ))
      ) : (
        <p>image</p>
      )}
    </div>
  );
};

export default CatImage;