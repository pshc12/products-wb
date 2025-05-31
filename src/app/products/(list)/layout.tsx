import { ReactNode } from 'react';
import ViewTypeProvider from './view-type';
import AddButton from './add-button';

interface Props {
  children: ReactNode;
}

export default function ProductListLayout({ children }: Props) {
  return (
    <ViewTypeProvider>
      <main className="p-4 pt-20 w-full max-w-[960px] mx-auto">
        <div className="flex w-full justify-end mb-4">
          <AddButton />
        </div>
        {children}
      </main>
    </ViewTypeProvider>
  );
}
