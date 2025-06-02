import { memo } from 'react';
import Rating from './rating';
import Thumbnail from './thumbnail';
import { ProductListData } from '@/types/products';

interface Props {
  data: ProductListData;
}

function ListItem({ data }: Props) {
  const { thumbnail, title, description, rating, reviews } = data;

  return (
    <div className="flex gap-4 py-2">
      <Thumbnail thumbnail={thumbnail} viewType="list" />

      <div>
        <div className="flex gap-4">
          <h3 className="font-bold">{title}</h3>
          <Rating rating={rating} reviewCount={reviews.length} />
        </div>
        {/* todo see more description... & max-h calc */}
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default memo(ListItem);
