import Link from 'next/link';
import Confirm_Modal from '@/app/ui/dashboard/confirm-modal';

import { Suspense } from 'react';
export default function Page() {
  async function handleClick() {
    'use server';
    console.log('yes click in page');
  }

  return (
    <div className="flex grow justify-normal  md:flex-none">
      <p>Dashboard Page</p>

      <Link href="dashboard?modal=y">
        <button type="button" className="bg-blue-500 p-2 text-white">
          Open Modal
        </button>
      </Link>
      {/* <Confirm_Modal onClose={handleClick} isOpen={true} />*/}
    </div>
  );
}
