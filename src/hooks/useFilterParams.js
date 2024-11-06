import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { updateUrlParam } from '@/lib/utils';
import { FILTER_KEYS } from '@/constants/filter-keys';

export function useFilterParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      [FILTER_KEYS.CATEGORY]: searchParams.get(FILTER_KEYS.CATEGORY) || '',
      [FILTER_KEYS.BRANDS]:
        searchParams.get(FILTER_KEYS.BRANDS)?.split(',').filter(Boolean) || [],
      [FILTER_KEYS.MIN_PRICE]: searchParams.get(FILTER_KEYS.MIN_PRICE) || '',
      [FILTER_KEYS.MAX_PRICE]: searchParams.get(FILTER_KEYS.MAX_PRICE) || '',
      [FILTER_KEYS.RATING]: Number(searchParams.get(FILTER_KEYS.RATING)) || 0,
    }),
    [searchParams],
  );

  const updateFilters = useCallback(
    (newFilters) => {
      const params = new URLSearchParams(searchParams);
      Object.entries(newFilters).forEach(([key, value]) => {
        updateUrlParam(params, key, value);
      });
      setSearchParams(params);
    },
    [searchParams, setSearchParams],
  );

  const resetFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  return { filters, updateFilters, resetFilters };
}
