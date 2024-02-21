import Image from 'next/image';
import serviceImg from '@/public/hero-image-full.png';
import { Component } from 'lucide-react';

const SERVICE_DESCRIPTION = [
  { content: '不套用公版，專屬於您的客製' },
  { content: '可依照您的需求使用AI為您產生專屬模板' },
  { content: '客製化自由度高' },
  { content: '獨一無二的網站' },
];

const ServiceSection = () => {
  return (
    <div className='flex-grow'>
      <div className='mx-auto max-w-[1440px] px-4 py-10 lg:px-10 lg:py-20'>
        <section className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='flex w-full flex-col items-start justify-center'>
            <h1 className='text-2xl font-semibold'>為什麼要選擇仨恩網頁設計工作室？</h1>
            <p className='mt-2 text-gray-600'>
              不套用公版，提供您客製化的服務，讓您品牌的網站獨一無二
            </p>

            <ul className='mt-4 list-inside list-none space-y-4'>
              {SERVICE_DESCRIPTION.map((service) => (
                <li key={service.content} className='flex items-center justify-start'>
                  <Component size={15} className='mr-2' />
                  <div>{service.content}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className='aspect-square max-h-[550px] max-w-[550px]'>
            <Image
              src={serviceImg}
              alt='service image'
              width={200}
              height={200}
              className='h-[550px] w-[550px] object-cover'
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceSection;
