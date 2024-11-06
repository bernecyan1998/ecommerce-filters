import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/utils';
import { DollarSign } from 'lucide-react';

export const PriceFilter = ({ minPrice, maxPrice, onChange }) => {
  // Local state for immediate input feedback
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [debouncedTimer, setDebouncedTimer] = useState(null);

  useEffect(() => {
    setLocalMinPrice(minPrice);
    setLocalMaxPrice(maxPrice);
  }, [minPrice, maxPrice]);

  const handlePriceChange = (type, value) => {
    if (type === 'min') {
      setLocalMinPrice(value);
    } else {
      setLocalMaxPrice(value);
    }

    if (debouncedTimer) {
      clearTimeout(debouncedTimer);
    }

    const timer = setTimeout(() => {
      onChange({
        minPrice: type === 'min' ? value : localMinPrice,
        maxPrice: type === 'max' ? value : localMaxPrice,
      });
    }, 1000);

    setDebouncedTimer(timer);
  };

  const handleClear = () => {
    setLocalMinPrice('');
    setLocalMaxPrice('');
    onChange({ minPrice: '', maxPrice: '' });
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debouncedTimer) {
        clearTimeout(debouncedTimer);
      }
    };
  }, [debouncedTimer]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Price Range</h3>
        {(localMinPrice || localMaxPrice) && (
          <button
            onClick={handleClear}
            className="text-xs text-indigo-600 hover:text-indigo-700"
          >
            Clear
          </button>
        )}
      </div>
      <div className="space-y-3">
        <PriceInput
          placeholder="Min Price"
          value={localMinPrice}
          onChange={(value) => handlePriceChange('min', value)}
        />
        <PriceInput
          placeholder="Max Price"
          value={localMaxPrice}
          onChange={(value) => handlePriceChange('max', value)}
        />
        {(localMinPrice || localMaxPrice) && (
          <div className="text-xs text-gray-500">
            {localMinPrice ? formatPrice(localMinPrice) : '$0'}
            {' - '}
            {localMaxPrice ? formatPrice(localMaxPrice) : '∞'}
          </div>
        )}
      </div>
    </div>
  );
};

const PriceInput = ({ placeholder, value, onChange }) => (
  <div className="relative">
    <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-8 p-2 text-sm bg-gray-50 border border-gray-200 rounded-lg 
        focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      min="0"
    />
  </div>
);
