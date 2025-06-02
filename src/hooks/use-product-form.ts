import { formSchema } from '@/app/products/new/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { PRODUCT_LIST_PAGE } from '../constants/pages';
import { addProduct } from '../api/products-server';

export default function useProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const router = useRouter();

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    try {
      const { title } = await addProduct(values);
      router.push(PRODUCT_LIST_PAGE);
      toast.success(`Product added! [${title}]`);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    }
  }, []);

  return { form, onSubmit };
}
