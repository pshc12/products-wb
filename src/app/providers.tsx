import { ProductListStoreProvider } from '@/providers/product-list-store';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return <ProductListStoreProvider>{children}</ProductListStoreProvider>;
}
