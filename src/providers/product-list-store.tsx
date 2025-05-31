'use client';

import {
  createProductListStore,
  ProductListStore,
} from '@/stores/product-list';
import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

export type ProductListStoreApi = ReturnType<typeof createProductListStore>;

export const ProductListStoreContext = createContext<
  ProductListStoreApi | undefined
>(undefined);

export interface ProductListStoreProviderProps {
  children: ReactNode;
}

export const ProductListStoreProvider = ({
  children,
}: ProductListStoreProviderProps) => {
  const storeRef = useRef<ProductListStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createProductListStore();
  }

  return (
    <ProductListStoreContext.Provider value={storeRef.current}>
      {children}
    </ProductListStoreContext.Provider>
  );
};

export const useProductListStore = <T,>(
  selector: (store: ProductListStore) => T
): T => {
  const productListStoreContext = useContext(ProductListStoreContext);

  if (!productListStoreContext) {
    throw new Error(
      `useProductListStore must be used within ProductListStoreProvider`
    );
  }

  return useStore(productListStoreContext, selector);
};
