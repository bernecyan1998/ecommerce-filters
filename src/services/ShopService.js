import categories from '@/_mocks/categories.json';
import brands from '@/_mocks/brands.json';
import products from '@/_mocks/products.json';

const filterConditions = {
  category: (product, categoryId) =>
    !categoryId || product.categoryId === categoryId,

  brands: (product, brands) =>
    !brands.length || brands.includes(product.brandId),

  minPrice: (product, minPrice) =>
    !minPrice || product.price >= Number(minPrice),

  maxPrice: (product, maxPrice) =>
    !maxPrice || product.price <= Number(maxPrice),

  rating: (product, rating) => !rating || product.rating >= rating,
};

class ShopService {
  static async getCategories() {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return categories;
  }

  static async getBrands() {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return brands;
  }

  static async getBrandsByCategory(categoryId) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return brands.filter((brand) => brand.categoryId === categoryId);
  }

  static async getFilteredProducts(filters) {
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 400),
    );

    return products.filter((product) =>
      Object.entries(filters).every(([key, value]) =>
        filterConditions[key](product, value),
      ),
    );
  }
}

export default ShopService;
