import { ItemViewType } from '@/lib/types/products';
import { cn } from '@/lib/utils';
import { memo } from 'react';
import Image from 'next/image';

interface Props {
  thumbnail: string;
  viewType: ItemViewType;
}

function Thumbnail({ thumbnail, viewType }: Props) {
  return (
    <div
      className={cn(
        'aspect-square w-full flex relative flex-shrink-0 self-start',
        viewType === 'list' && 'w-[100px]'
      )}
    >
      <Image
        src={thumbnail}
        alt="product thumbnail"
        fill={true}
        className="object-contain"
        sizes={
          viewType === 'list'
            ? '100px'
            : '(max-width: 359px) 100vw, (max-width: 639px) 50vw, (max-width: 759px) 33vw, (max-width: 1024px) 25vw, 218px'
        }
      />
    </div>
  );
}

export default memo(Thumbnail);
