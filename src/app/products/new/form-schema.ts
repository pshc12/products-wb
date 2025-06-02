import { productBrands } from '@/lib/constants/iterables';
import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().trim().max(15).nonempty('Title is required'),
  brand: z.enum(productBrands, {
    errorMap: () => ({ message: 'Brand is required' }),
  }),
  description: z.string().trim(),
  price: z
    .number({
      errorMap: () => ({ message: 'Price is required' }),
    })
    .min(1000, 'Price must be at least 1000')
    .int(),
  discountPercentage: z
    .number()
    .min(0, 'Discount must be at least 0%')
    .max(100, 'Discount must be at most 100%')
    .optional(),
});
