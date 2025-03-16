import GaleryGridDisplay from '../components/GaleryGridDisplay';
import TextLinesDisplay from '../components/TextLinesDisplay';

const textLines: string[] = [
  'Architecture shapes the spaces we live in, blending form, function, and artistry. Our collections highlight iconic structures, intricate details, and modern innovations. From historic landmarks to futuristic designs, each piece tells a story of creativity and engineering. Light, shadow, and perspective bring these spaces to life, showcasing their beauty and purpose. Explore our collections and experience the art of built environments.',
];

const ArhitecturePage = () => {
  return (
    <>
      <TextLinesDisplay mainLine='Arhitecture' textLines={textLines} />
      <GaleryGridDisplay paintingsData={[]} />
    </>
  );
};

export default ArhitecturePage;
