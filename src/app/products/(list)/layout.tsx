import { ReactNode } from 'react';
import ViewTypeSetter from './view-type-setter';
import AddButton from './add-button';

interface Props {
  children: ReactNode;
}

export default function ProductListLayout({ children }: Props) {
  return (
    <ViewTypeSetter>
      <main className="p-4 py-20 w-full max-w-[960px] mx-auto">
        <div className="flex w-full justify-end mb-4">
          <AddButton />
        </div>
        {children}
      </main>
    </ViewTypeSetter>
  );
}
