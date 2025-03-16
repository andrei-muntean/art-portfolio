import GaleryGridDisplay, {
  PaintingDataProps,
} from '../components/GaleryGridDisplay';
import TextLinesDisplay from '../components/TextLinesDisplay';

const paintingsData: PaintingDataProps[] = [
  {
    src: '/images/painting1.1.jpeg',
    alt: 'Painting 1',
    description: 'A beautiful landscape painting.',
  },
  {
    src: '/images/painting1.2.jpeg',
    alt: 'Painting 2',
    description: 'A stunning portrait artwork.',
  },
  {
    src: '/images/painting2.1.jpeg',
    alt: 'Painting 3',
    description: 'An abstract piece of art.',
  },
  {
    src: '/images/painting2.2.jpeg',
    alt: 'Painting 4',
    description: 'A modern interpretation of nature.',
  },
  {
    src: '/images/painting3.1.jpeg',
    alt: 'Painting 5',
    description: 'A vibrant and colorful cityscape.',
  },
];

const textLines: string[] = [
  'This collection of paintings explores the intersection of nature and human emotion. The series begins with serene landscapes that evoke feelings of peace and calm, gradually transitioning to more intense, emotional portraits that capture the depth of human experience. The collection also features vibrant abstract works, where bold colors and shapes come together to express raw energy and movement. A few still life pieces are included, showcasing the delicate beauty of everyday objects, while others focus on the stark contrast between light and shadow in cityscapes and seascapes. Each piece invites the viewer to explore the nuanced relationship between color, form, and feeling.',
];

const PaintingsPage = () => {
  return (
    <>
      <TextLinesDisplay mainLine='Painting' textLines={textLines} />
      <GaleryGridDisplay paintingsData={paintingsData} />
    </>
  );
};

export default PaintingsPage;
