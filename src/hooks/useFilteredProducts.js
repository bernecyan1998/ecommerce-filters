import { useState, useEffect } from 'react';
import ShopService from '@/services/ShopService';

export function useFilteredProducts(filters) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await ShopService.getFilteredProducts(filters);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products: filteredProducts, isLoading, error };
}
