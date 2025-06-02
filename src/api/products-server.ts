'use server';

import { AddProductRequest, AddProductResponse } from '@/types/products';

const BASE_API_URL = 'https://dummyjson.com';

export async function addProduct(reqBody: AddProductRequest) {
  const response = await fetch(BASE_API_URL + '/products/add', {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data as Promise<AddProductResponse>;
}
