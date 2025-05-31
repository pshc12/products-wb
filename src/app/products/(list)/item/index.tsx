import { ProductListData, ItemViewType } from '@/lib/types/products';
import GridItem from './grid-item';
import ListItem from './list-item';
import { memo } from 'react';

interface Props {
  data: ProductListData;
  viewType: ItemViewType;
}

function Item({ data, viewType }: Props) {
  return viewType === 'grid' ? (
    <GridItem data={data} />
  ) : (
    <ListItem data={data} />
  );
}

export default memo(Item);
