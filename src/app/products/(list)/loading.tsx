import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-[40vh] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    </div>
  );
}
