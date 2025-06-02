import { Button } from '@/components/ui/button';
import { ADD_PRODUCT_PAGE } from '@/lib/constants/pages';
import Link from 'next/link';

export default function AddButton() {
  return (
    <Button asChild>
      <Link href={ADD_PRODUCT_PAGE}>Add Product</Link>
    </Button>
  );
}
