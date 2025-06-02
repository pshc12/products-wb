import { Star } from 'lucide-react';
import { memo } from 'react';

interface Props {
  rating: number;
  reviewCount: number;
}

function Rating({ rating, reviewCount }: Props) {
  return (
    <p className="flex items-center gap-0.5 text-amber-600 text-sm">
      <Star fill="currentColor" size={12} />
      {rating}({reviewCount})
    </p>
  );
}

export default memo(Rating);
