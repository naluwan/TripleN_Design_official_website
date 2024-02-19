import Image from 'next/image';
import logo from '@/public/TripleNDesign-logo.png';

const Logo = () => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={180}
      height={60}
      className='aspect-auto h-[80px] w-[80px]'
      priority
    />
  );
};

export default Logo;
