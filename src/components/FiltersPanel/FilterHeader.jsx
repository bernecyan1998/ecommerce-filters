import { Button } from '@/components/ui/button';

export const FilterHeader = ({ onReset }) => (
  <div className="p-4 border-b border-gray-100 bg-gray-50/50">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-medium text-gray-800">Filters</h2>
      <Button
        onClick={onReset}
        variant="ghost"
        size="sm"
        className="text-gray-500 hover:text-gray-700"
      >
        Reset all
      </Button>
    </div>
  </div>
);
