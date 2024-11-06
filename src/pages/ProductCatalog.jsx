import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { useFilterParams } from '@/hooks/useFilterParams';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import ProductCatalogHeading from '@/components/headings/ProductCatalogHeader';
import ProductsGrid from '@/components/ProductsGrid';
import Spinner from '@/components/ui/spinner';
import FiltersPanel from '@/components/FiltersPanel';

const ProductCatalogPage = () => {
  const [isMobileFilterVisible, setMobileFilterVisible] = React.useState(false);
  const { filters } = useFilterParams();
  const { products, isLoading, error } = useFilteredProducts(filters);

  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-2rem)]">
        <ProductCatalogHeading
          isMobileFilterVisible={isMobileFilterVisible}
          setMobileFilterVisible={setMobileFilterVisible}
        />

        <div className="flex flex-col md:flex-row gap-6 flex-1 overflow-hidden">
          <div
            className={`md:block ${isMobileFilterVisible ? 'block' : 'hidden'} md:overflow-y-auto`}
          >
            <FiltersPanel />
          </div>

          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <Spinner />
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <ProductsGrid products={products} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductCatalogPage;
