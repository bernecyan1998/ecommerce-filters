import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { formatPrice } from '@/lib/utils';

const ProductCard = React.memo(({ product }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Badge variant="secondary">{formatPrice(product.price)}</Badge>
        </div>
        <div className="space-y-2">
          <Badge variant="outline">{product.categoryId}</Badge>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
