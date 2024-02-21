import { Bot, ChevronRight, Compass, Laptop } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const SERVICE_DATA = [
  { title: '主要服務', description: '專注於網頁設計、架設和品牌形象提升', icon: Laptop },
  {
    title: '網站設計',
    description: '使用創新且導航清晰的網站設計，RWD設計，讓您在手機或電腦都能使用',
    icon: Compass,
  },
  {
    title: 'UI/UX設計',
    description: '不套用公版，可依照您的需求使用AI為您產生專屬模板',
    icon: Bot,
  },
];

const ServiceCardsSection = () => {
  return (
    <div className='flex-grow'>
      <div className='mx-auto max-w-[1440px] px-4 py-10 lg:px-10 lg:py-20'>
        <section className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20'>
          {SERVICE_DATA.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
          <div className='col-span-3 flex items-center justify-center text-xl'>
            <button className='flex items-center text-black'>
              立即諮詢 <ChevronRight size={30} className='pl-2' />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceCardsSection;
