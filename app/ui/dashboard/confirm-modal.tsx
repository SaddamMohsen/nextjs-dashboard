'use client';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
type props = {
  onYes: () => void;
};
export default function Confirm_Modal({ onYes }: props) {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  useEffect(() => {
    if (modal === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [modal]);
  const closeDialog = () => {
    dialogRef.current?.close();
    console.log('close clicked');
  };

  const clickOk = () => {
    closeDialog();
    onYes();
  };
  const dialog: JSX.Element | null =
    modal === 'y' ? (
      <dialog ref={dialogRef}>
        {/*modalisOpen && (*/}
        <div className=" fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto   bg-black bg-opacity-20 backdrop-blur">
          <div className="shadow-xs m-auto w-96 rounded-lg bg-white p-4 ">
            <div className="flex grow flex-col items-center">
              <ExclamationTriangleIcon className="m-5 w-10 text-red-500" />
              <div className="mt-2 flex-shrink-0">
                <p className="text-md  text-right text-gray-500">
                  {/*<b>Are you sure you want to delete this story?</b>*/}
                  <b>هل أنت متأكد انك تريد الحذف</b>
                  <br />
                  بمجرد موافقتك على الحذف لن تستطيع استرجاع القصة
                </p>
              </div>

              <div className="flex flex-row space-x-10 p-3 text-right">
                <div>
                  <Link href={pathname}>
                    <button
                      type="button"
                      onClick={clickOk}
                      className="inline-flex w-full justify-center rounded-md bg-black px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      نعم
                    </button>
                  </Link>
                </div>
                <Link href={pathname}>
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="inline-flex w-24 justify-center rounded-md bg-black px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  >
                    لا
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
