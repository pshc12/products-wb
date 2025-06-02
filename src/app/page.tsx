import { PRODUCT_LIST_PAGE } from '@/lib/constants/pages';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(PRODUCT_LIST_PAGE);

  return null;
}
