import http from '../api/common-http';
import IProduct from '../types/product-type';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BYID,
  GET_CATEGORIES,
  SAVE_PRODUCT,
} from '../api/endpoints';
import ICategory from '../types/category-type';

class ProductService {
  getAll() {
    return http.get<Array<IProduct>>(GET_PRODUCTS);
  }

  get(id: string) {
    return http.get<IProduct>(GET_PRODUCT_BYID + id);
  }
  getCategories() {
    return http.get<Array<ICategory>>(GET_CATEGORIES);
  }

  createProduct(data: IProduct) {
    return http.post<IProduct>(SAVE_PRODUCT, data);
  }
}

export default new ProductService();
