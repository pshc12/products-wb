import { productBrands } from '@/constants/iterables';

export interface ProductListData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: ProductReviewData[];
}

export interface ProductReviewData {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface GetProductsResponse {
  products: ProductListData[];
  total: number;
  skip: number;
  limit: number;
}

export interface AddProductRequest {
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  brand: ProductBrand;
}

export interface AddProductResponse extends AddProductRequest {
  id: number;
}

export type ItemViewType = 'list' | 'grid';

export type ProductBrand = (typeof productBrands)[number];
