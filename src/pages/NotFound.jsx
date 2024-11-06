import { Link } from 'react-router-dom';
import { HomeIcon, SearchX, HelpCircle, ArrowLeft } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout className="h-screen flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <div className="text-center space-y-8 p-8 max-w-md">
          <div className="relative">
            <SearchX
              className="w-40 h-40 mx-auto text-indigo-200 animate-pulse"
              strokeWidth={1.5}
            />
            <span
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-6xl font-bold text-indigo-600"
            >
              404
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
            <p className="text-gray-500">
              We couldn&apos;t find what you&apos;re looking for. Let&apos;s get
              you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium 
                text-white bg-indigo-600 rounded-lg border border-indigo-600
                hover:bg-indigo-700 hover:border-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium 
                text-indigo-600 bg-white rounded-lg border border-indigo-200
                hover:bg-indigo-50 hover:border-indigo-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Page
            </Link>
          </div>

          <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>Need help?</span>
            <Link
              to="/contact"
              className="text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
