import { getProducts } from '@/lib/api/products';
import ProductList from './product-list';

export default async function ProductListPage() {
  const data = await getProducts();

  return <ProductList data={data} />;
}
