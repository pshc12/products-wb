'use client';

import { getProducts } from '@/lib/api/products';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import { useProductListStore } from '@/providers/product-list-store';
import Item from './item';

export default function ProductList() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

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
