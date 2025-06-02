import { formatInt } from '@/utils';
import { useFormContext } from 'react-hook-form';

export default function ResultPrice() {
  const { watch } = useFormContext();

  const [price, discountPercentage] = watch(['price', 'discountPercentage']);
  const resultPrice = price * (100 - (discountPercentage ?? 0)) * 0.01;

  return (
    <div className="text-end">
      <p className="font-semibold text-sm">Result Price</p>
      <p className="font-bold text-lg">{formatInt(resultPrice)} KRW</p>
    </div>
  );
}
