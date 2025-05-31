import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AddButton() {
  return (
    <Button asChild>
      <Link href="/products/new">Add Product</Link>
    </Button>
  );
}
