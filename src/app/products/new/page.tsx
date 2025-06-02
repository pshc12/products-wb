import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import ProductForm from './form';

export default function AddProductPage() {
  return (
    <main className="p-4 py-20">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Add a product to the list</CardTitle>
          <CardDescription>Enter the product information below</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </main>
  );
}
