import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export const CategoryFilter = ({ categories, selectedCategory, onChange }) => (
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
    <RadioGroup
      value={selectedCategory}
      onValueChange={onChange}
      className="space-y-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="" id="all-categories" />
        <Label htmlFor="all-categories" className="text-sm text-gray-600">
          All Categories
        </Label>
      </div>
      {categories.map((category) => (
        <div key={category.id} className="flex items-center space-x-2">
          <RadioGroupItem value={category.id} id={category.id} />
          <Label htmlFor={category.id} className="text-sm text-gray-600">
            {category.name}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);
