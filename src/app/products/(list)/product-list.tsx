'use client';

import { cn } from '@/lib/utils';
import { useProductListStore } from '@/providers/product-list-store';
import Item from './item';
import { GetProductsResponse } from '@/lib/types/products';

interface Props {
  data: GetProductsResponse;
}

export default function ProductList({ data }: Props) {
  const { viewType, isViewTypeSetThisSession } = useProductListStore(
    (state) => state
  );

  if (!isViewTypeSetThisSession) {
    return null;
  }

  return (
    <ul
      className={
        viewType === 'grid'
          ? 'grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'
          : 'max-w-[800px] mx-auto'
      }
    >
      {data?.products.map((item) => {
        return (
          <li
            key={item.id}
            className={cn(viewType === 'list' && 'border-b border-slate-200')}
          >
            <Item viewType={viewType} data={item} />
          </li>
        );
      })}
    </ul>
  );
}
