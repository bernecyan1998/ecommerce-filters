import { PackageSearch } from 'lucide-react';

const NoProductsMessage = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <PackageSearch className="w-16 h-16 text-gray-300 mb-4" />
    <p className="text-gray-500 text-lg font-medium">No products found</p>
    <p className="text-gray-400 mt-2">
      Try adjusting your filters or search criteria
    </p>
  </div>
);

export default NoProductsMessage;
