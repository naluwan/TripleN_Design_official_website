import HomeContent from '@/components/Home/HomeContent';
import Image from 'next/image';
import heroImage from '@/public/hero-image.png';
import ServiceSection from '@/components/ServiceSection';
import ServiceCardsSection from '@/components/ServiceCardsSection/ServiceCardsSection';

const Home = () => {
  return (
    <div className='flex h-auto flex-col'>
      {/* Hero 圖 */}
      <Image
        src={heroImage}
        alt='A placeholder'
        width={500}
        height={300}
        className='aspect-auto h-[500px] w-full object-cover'
      />

      {/* Hero 內容 */}
      <HomeContent />

      {/* 服務特色 */}
      <ServiceSection />

      {/* 服務 card */}
      <ServiceCardsSection />
    </div>
  );
};

export default Home;
