'use client';

import { useProductListStore } from '@/providers/product-list-store';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export default function ViewTypeProvider({ children }: Props) {
  const { initializeViewType, isViewTypeSetThisSession } = useProductListStore(
    (state) => state
  );

  useEffect(() => {
    if (!isViewTypeSetThisSession) {
      initializeViewType();
    }
  }, [isViewTypeSetThisSession]);

  return children;
}
