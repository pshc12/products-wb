import { PRODUCT_LIST_PAGE } from '@/constants/pages';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 py-2 px-6">
      <Link href={PRODUCT_LIST_PAGE} className="text-5xl font-extrabold">
        PRODUCTS
      </Link>
    </header>
  );
}
