import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { memo } from 'react';
import Rating from './rating';
import Thumbnail from './thumbnail';
import { ProductListData } from '@/types/products';

interface Props {
  data: ProductListData;
}

function GridItem({ data }: Props) {
  const { thumbnail, title, description, rating, reviews } = data;

  return (
    <Card className="gap-0">
      <Thumbnail thumbnail={thumbnail} viewType="grid" />

      <CardHeader className="px-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="px-4">
        <Rating rating={rating} reviewCount={reviews.length} />
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export default memo(GridItem);
