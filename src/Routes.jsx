import { Route, Routes } from 'react-router-dom';
import ProductCatalogPage from './pages/ProductCatalog';
import NotFoundPage from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductCatalogPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Fallback route */}
    </Routes>
  );
};

export default AppRoutes;
