import { GetProductsResponse } from '@/types/products';

const BASE_API_URL = 'https://dummyjson.com';

export async function getProducts() {
  const response = await fetch(BASE_API_URL + '/products?limit=20');
  const data = await response.json();
  return data as Promise<GetProductsResponse>;
}
