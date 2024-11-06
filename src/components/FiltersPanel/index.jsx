import { useState, useEffect } from 'react';
import { FilterHeader } from './FilterHeader';
import { CategoryFilter } from './CategoryFilter';
import { BrandFilter } from './BrandFilter';
import { RatingFilter } from './RatingFilter';
import { PriceFilter } from './PriceFilter';
import { FiltersSkeleton } from './FiltersSkeleton';
import { useFilterParams } from '@/hooks/useFilterParams';
import { useDebounce } from '@/hooks/useDebounce';
import ShopService from '@/services/ShopService';

const FiltersPanel = () => {
  const [categories, setCategories] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { filters, updateFilters, resetFilters } = useFilterParams();

  const debouncedMinPrice = useDebounce(filters.minPrice);
  const debouncedMaxPrice = useDebounce(filters.maxPrice);

  useEffect(() => {
    const applyPriceFilters = async () => {
      if (
        debouncedMinPrice !== filters.minPrice ||
        debouncedMaxPrice !== filters.maxPrice
      ) {
        setIsLoading(true);
        try {
          await updateFilters({
            ...filters,
            minPrice: debouncedMinPrice,
            maxPrice: debouncedMaxPrice,
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    applyPriceFilters();
  }, [debouncedMinPrice, debouncedMaxPrice]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const data = await ShopService.getCategories();
        setCategories(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      setIsLoading(true);
      try {
        const data = await (filters.category
          ? ShopService.getBrandsByCategory(filters.category)
          : ShopService.getBrands());
        setAvailableBrands(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrands();
  }, [filters.category]);

  const handleCategoryChange = async (categoryId) => {
    setIsLoading(true);
    try {
      await updateFilters({
        ...filters,
        category: categoryId,
        brands: [],
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBrandChange = async (brandId) => {
    setIsLoading(true);
    try {
      const currentBrands = filters.brands;
      const newBrands = currentBrands.includes(brandId)
        ? currentBrands.filter((b) => b !== brandId)
        : [...currentBrands, brandId];

      await updateFilters({
        ...filters,
        brands: newBrands,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingChange = async (rating) => {
    setIsLoading(true);
    try {
      await updateFilters({
        ...filters,
        rating,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePriceChange = async (priceValues) => {
    setIsLoading(true);
    try {
      await updateFilters({
        ...filters,
        ...priceValues,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetFilters = async () => {
    setIsLoading(true);
    try {
      await resetFilters();
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <FiltersSkeleton />;
  }

  return (
    <div className="w-72 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <FilterHeader onReset={handleResetFilters} />

      <div className="divide-y divide-gray-100">
        <CategoryFilter
          categories={categories}
          selectedCategory={filters.category}
          onChange={handleCategoryChange}
        />

        {availableBrands.length > 0 && (
          <BrandFilter
            brands={availableBrands}
            selectedBrands={filters.brands}
            categoryName={
              categories.find((c) => c.id === filters.category)?.name
            }
            onChange={handleBrandChange}
          />
        )}

        <RatingFilter rating={filters.rating} onChange={handleRatingChange} />

        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default FiltersPanel;
