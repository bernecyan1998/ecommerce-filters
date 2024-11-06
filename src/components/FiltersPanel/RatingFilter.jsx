import { Slider } from '../ui/slider';

export const RatingFilter = ({ rating, onChange }) => (
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-700 mb-4">Rating</h3>
    <div className="px-1">
      <Slider
        defaultValue={[rating]}
        max={5}
        step={0.5}
        value={[rating]}
        onValueChange={(values) => onChange(values[0])}
        className="w-full"
      />
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>{rating} ★</span>
        <span>5 ★</span>
      </div>
    </div>
  </div>
);
