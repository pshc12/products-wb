import { ProductListStoreProvider } from '@/providers/product-list-store';
import QueryProvider from '@/providers/query';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ProductListStoreProvider>{children}</ProductListStoreProvider>
    </QueryProvider>
  );
}
