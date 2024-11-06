import { Skeleton } from '@/components/ui/skeleton';

export const FiltersSkeleton = () => (
  <div className="w-72 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    {/* Header Skeleton */}
    <div className="p-4 border-b border-gray-100 bg-gray-50/50">
      <div className="flex items-center justify-between">
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>

    <div className="divide-y divide-gray-100">
      <SkeletonSection count={4} type="radio" />
      <SkeletonSection count={4} type="checkbox" />
      <RatingSkeletonSection />
      <PriceSkeletonSection />
    </div>
  </div>
);

const SkeletonSection = ({ count, type }) => (
  <div className="p-4">
    <Skeleton className="h-5 w-24 mb-4" />
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <Skeleton
            className={`h-4 w-4 ${type === 'radio' ? 'rounded-full' : 'rounded-sm'}`}
          />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  </div>
);

const RatingSkeletonSection = () => (
  <div className="p-4">
    <Skeleton className="h-5 w-16 mb-4" />
    <Skeleton className="h-2 w-full rounded-lg mb-3" />
    <div className="flex justify-between">
      <Skeleton className="h-4 w-8" />
      <Skeleton className="h-4 w-8" />
    </div>
  </div>
);

const PriceSkeletonSection = () => (
  <div className="p-4">
    <Skeleton className="h-5 w-24 mb-4" />
    <div className="space-y-3">
      <Skeleton className="h-9 w-full rounded-lg" />
      <Skeleton className="h-9 w-full rounded-lg" />
    </div>
  </div>
);
