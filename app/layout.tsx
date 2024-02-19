import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastProvider } from '@/components/providers/toaster-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:
      '仨恩網頁設計工作室' +
      ' | ' +
      ' TripleN Design' +
      ' | ' +
      '網頁設計、會員系統、電商、官方網站設計',
    template: '%s' + ' | ' + '仨恩網頁設計工作室' + ' | ' + ' TripleN Design',
  },
  description:
    '仨恩網頁設計工作室 | TripleN Design 官方網站、電商網站、網頁設計、會員系統，不套公版、客製化自由度高，給您的品牌一個專屬、獨特的網站',
  icons: {
    icon: '/favicon.io',
  },
  keywords: [
    '網頁設計',
    '設計',
    '官網',
    '官方網站',
    '官網設計',
    '官方網站設計',
    '會員系統',
    '會員',
    '前端',
    '後端',
    '全端',
    '電商網站',
    '電商',
    '電商網站設計',
    '不套公版',
    '客製化',
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='zh-tw' className='hide-scrollbar'>
      <body className={inter.className}>
        <div className='sticky top-0 z-50 bg-white shadow-md'>
          <Navbar />
        </div>
        <main className='mx-auto h-auto max-w-[1440px]'>
          <ToastProvider />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
