import { formSchema } from '@/app/products/new/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { addProduct } from '../api/products';
import { PRODUCT_LIST_PAGE } from '../constants/pages';

export default function useProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: addProduct,
    onError: (error) => {
      console.error(error);
      toast.error('Something went wrong.');
    },
    onSuccess: (data) => {
      router.push(PRODUCT_LIST_PAGE);
      toast.success(`Product added! [${data.title}]`);
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  }, []);

  return { form, onSubmit, mutation };
}
