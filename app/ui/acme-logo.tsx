import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import clsx from 'clsx';
type props = {
  showName: boolean;
};
export default function AcmeLogo({ showName }: props) {
  return (
    <div
      className={clsx(
        `${lusitana.className} flex  items-center leading-none text-white md:w-auto`,
        {
          'flex-col md:w-auto ': !showName,
        },
      )}
    >
      <GlobeAltIcon className="h-12 w-10 rotate-[15deg]" />
      <p
        className={clsx('text-[44px]', {
          'text-[10px]': !showName,
        })}
      >
        Acme
      </p>
    </div>
  );
}
