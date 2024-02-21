import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className='space-y-4'>
      <Icon size={40} />
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default ServiceCard;
