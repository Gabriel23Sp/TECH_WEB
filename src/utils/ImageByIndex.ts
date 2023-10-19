import { StaticImageData } from 'next/image';

const imageByIndex = (
  index: number,
  images: StaticImageData[]
): StaticImageData => images[index % images.length];

export default imageByIndex;