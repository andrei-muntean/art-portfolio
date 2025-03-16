import GaleryGridDisplay from '../components/GaleryGridDisplay';
import TextLinesDisplay from '../components/TextLinesDisplay';

const textLines: string[] = [
  'Videography brings stories to life through movement, light, and sound. Our collections showcase breathtaking landscapes, cinematic portraits, and dynamic storytelling. Every frame is crafted to evoke emotion and immerse viewers in the moment. From artistic shorts to documentary-style visuals, each piece is a journey. Explore the world through motion and experience storytelling like never before.',
];

const VideographyPage = () => {
  return (
    <>
      <TextLinesDisplay mainLine='Videography' textLines={textLines} />
      <GaleryGridDisplay paintingsData={[]} />
    </>
  );
};

export default VideographyPage;
