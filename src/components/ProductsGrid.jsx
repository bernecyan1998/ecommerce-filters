import ProductCard from '@/components/ProductCard';
import NoProductsMessage from '@/components/NoProductsMessage';

const ProductsGrid = ({ products }) => {
  if (products.length === 0) {
    return <NoProductsMessage />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
