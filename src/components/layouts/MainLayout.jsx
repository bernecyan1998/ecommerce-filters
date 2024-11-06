import { cn } from '@/lib/utils';

const MainLayout = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={cn('max-w-7xl mx-auto p-4 ', className)}>{children}</div>
    </div>
  );
};

export default MainLayout;
