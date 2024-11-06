import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const ProductCatalogHeading = ({
  isMobileFilterVisible,
  setMobileFilterVisible,
}) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">Product Catalog</h1>
    <Button
      variant="outline"
      className="md:hidden"
      onClick={() => setMobileFilterVisible(!isMobileFilterVisible)}
    >
      <SlidersHorizontal className="h-4 w-4 mr-2" />
      Filters
    </Button>
  </div>
);

export default ProductCatalogHeading;
