import GaleryGridDisplay from '../components/GaleryGridDisplay';
import TextLinesDisplay from '../components/TextLinesDisplay';

const textLines: string[] = [
  'Photography is the art of freezing time, preserving emotions, and revealing hidden beauty. Our collections showcase breathtaking landscapes, expressive portraits, and dynamic urban scenes. Each image tells a story—whether through rich colors, striking contrasts, or unique perspectives. From the serenity of nature to the energy of city life, every photo invites you into a visual journey. Explore our collections and see the world through a new lens.',
];

const PhotographyPage = () => {
  return (
    <>
      <TextLinesDisplay mainLine='Photography' textLines={textLines} />
      <GaleryGridDisplay paintingsData={[]} />
    </>
  );
};

export default PhotographyPage;
