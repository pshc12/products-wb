'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import ResultPrice from './result-price';
import { productBrands } from '@/constants/iterables';
import { Loader2Icon } from 'lucide-react';
import { toOptionalInt } from '@/utils';
import useProductForm from '@/hooks/use-product-form';

export default function ProductForm() {
  const { form, onSubmit } = useProductForm();

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="New Product" {...field} maxLength={15} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {productBrands.map((brand) => {
                      return (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="This product is..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-10 items-start">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-1">
                    <Input
                      className="text-end"
                      inputMode="decimal"
                      placeholder="0"
                      value={field.value ?? ''}
                      {...form.register('price', {
                        setValueAs: toOptionalInt,
                      })}
                    />
                    KRW
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discountPercentage"
            render={({ field }) => (
              <FormItem className="max-w-[100px]">
                <FormLabel>Discount</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-1">
                    <Input
                      className="text-end"
                      inputMode="numeric"
                      placeholder="0"
                      value={field.value ?? ''}
                      {...form.register('discountPercentage', {
                        setValueAs: (value) => {
                          const optionalInt = toOptionalInt(value);
                          if (optionalInt == undefined) {
                            return undefined;
                          }
                          return Math.min(optionalInt, 100);
                        },
                      })}
                      maxLength={3}
                    />
                    %
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <ResultPrice />

        <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
          {isSubmitting && <Loader2Icon className="animate-spin" />}
          Add Product
        </Button>
      </form>
    </Form>
  );
}
