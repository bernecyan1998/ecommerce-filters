import { Checkbox } from '../ui/checkbox';

export const BrandFilter = ({
  brands,
  selectedBrands,
  categoryName,
  onChange,
}) => (
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-700 mb-3">
      Brands
      {categoryName && (
        <span className="text-xs text-gray-500 ml-1">in {categoryName}</span>
      )}
    </h3>
    <div className="space-y-2">
      {brands.map((brand) => (
        <div key={brand.id} className="flex items-center">
          <Checkbox
            id={brand.id}
            checked={selectedBrands.includes(brand.id)}
            onCheckedChange={() => onChange(brand.id)}
            className="rounded-sm"
          />
          <label htmlFor={brand.id} className="ml-2 text-sm text-gray-600">
            {brand.name}
          </label>
        </div>
      ))}
    </div>
  </div>
);
