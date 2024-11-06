import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price, options = {}) {
  const defaultOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  };

  if (!price && price !== 0) return '';

  return new Intl.NumberFormat('en-US', defaultOptions).format(price);
}

export function updateUrlParam(params, key, value) {
  if (value && (Array.isArray(value) ? value.length : value)) {
    params.set(key, Array.isArray(value) ? value.join(',') : value.toString());
  } else {
    params.delete(key);
  }
}
