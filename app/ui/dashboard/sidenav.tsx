'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

export default function SideNav() {
  const [showName, setShow] = useState(false);
  const handleChange = () => {
    console.log('handle change click');

    setShow(!showName);
  };
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className={clsx(
          'mb-2 flex h-20 items-center justify-start rounded-md bg-blue-600 p-4 md:h-40',
          {
            'w-10 flex-col items-start': !showName,
          },
        )}
        href="/"
      >
        <div className="text-white md:w-auto">
          <AcmeLogo showName={showName} />
        </div>
      </Link>
      <button
        className={clsx(
          'mb-2  hidden grow  items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:block md:h-2 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'w-10 md:h-[10px]': !showName,
          },
        )}
        onClick={handleChange}
      >
        {showName ? 'show name >' : '>'}
      </button>
      <div className="flex grow flex-row justify-between space-x-2 md:h-0 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks showname={showName} />
        <div
          className={clsx(
            'hidden h-auto  grow rounded-md bg-gray-50 md:block md:h-4',
            {
              'hidden w-10 md:block': !showName,
            },
          )}
        ></div>
        <form>
          <button
            className={clsx(
              'flex h-[48px]  grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'w-10': !showName,
              },
            )}
          >
            <PowerIcon className="w-6" />
            {showName && <div className="hidden md:block">Sign Out</div>}
          </button>
        </form>
      </div>
    </div>
  );
}
