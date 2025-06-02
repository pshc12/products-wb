import { getProducts } from '@/api/products';
import ProductList from './_components/product-list';

export default async function ProductListPage() {
  const data = await getProducts();

  return <ProductList data={data} />;
}
