import HomeContent from '@/components/Home/HomeContent';
import Image from 'next/image';
import heroImage from '@/public/hero-image.png';

const Home = () => {
  return (
    <div className='flex h-auto flex-col'>
      <Image
        src={heroImage}
        alt='A placeholder'
        width={500}
        height={300}
        className='aspect-auto h-[500px] w-full object-cover'
      />
      <HomeContent />
    </div>
  );
};

export default Home;
