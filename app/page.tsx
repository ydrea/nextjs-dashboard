import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';
// import {Page} from '@/app/dashboard'
// import {View, Text } from 'react-native'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-zinc-300">
      <div className=
       "flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52 bg-gradient-to-b from-zinc-300 via-green-950 to-green-900"
        // bg-green-900
//bg-gradient-to-b from-zinc-300 via-green-900 to-green-800
        // {styles.head}
      //bg-gradient-to-b from-zinc-400 via-zinc-600 to-green-900 
      >
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-zinc-300 px-6 py-10 md:w-2/5 md:px-20 border-green-900 border-2">
        <Link href='/dashboard'>
        <div className={styles.shape} />
          <div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
            </Link>
          <div className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-green-900">
              Next.js Learn Course
            </a>
            , brought to you by Ydrea.
          </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium text-white bg-gradient-to-b from-zinc-300 via-green-950 to-green-900 transition-colors duration-200 hover:from-zinc-300 hover:to-green-950 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src='/hol.png' height={760} width={1000} className='hidden md:block' alt='hol'/>
          {/* Add Hero Images Here */}
          <Image src='/hen.png' height={260} width={300} className='md:hidden block' alt='hen'/>
        </div>
      </div>
    </main>
  );
}
