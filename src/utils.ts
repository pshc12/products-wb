import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toOptionalInt = (value: number | string): number | undefined => {
  const str = `${value}`.replace(/\D/g, '');

  if (str === '') {
    return undefined;
  }
  const parsed = Number(str);

  if (!Number.isSafeInteger(parsed)) {
    return undefined;
  }

  return parsed;
};

const numberFormatter = new Intl.NumberFormat('en-US');

export const formatInt = (num: number, ifNaN = '-') => {
  return Number.isNaN(num) ? ifNaN : numberFormatter.format(Math.round(num));
};
