'use client';

import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto bg-gray-100 h-[40vh] flex flex-col gap-4 max-w-sm items-center justify-center rounded-lg">
      <TriangleAlert className="size-10" />
      <h2 className="font-semibold">Something went wrong!</h2>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
