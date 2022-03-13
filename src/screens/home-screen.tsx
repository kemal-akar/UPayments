import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import ProductList from '../components/productList/ProductList';
import IProduct from '../types/product-type';
import ProductService from '../services/product-service';

import HeaderTitle from '../components/header/header-title';
import Wrapper from '../components/wrapper/wrapper';
import FloatingButton from '../components/productList/floating-button';
import ICategory from '../types/category-type';
import CategoryList from '../components/category/category-list';
const HomeScreen: React.FC = () => {
  const [productList, setProductList] = useState<Array<IProduct>>([]);
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    retrieveCategories();
    retrieveProducts('All');
  }, []);

  useEffect(() => {}, [selectedCategory]);

  const retrieveProducts = (category: string) => {
    setLoading(true);
    ProductService.getAll()
      .then((response: any) => {
        if (category === 'All') {
          setProductList(response.data);
        } else {
          setProductList(
            response.data.filter((product: { category: string; }) => product.category === category),
          );
        }
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const setSelectedCategoryId = (name: string) => {
    retrieveProducts(name);
    setSelectedCategory(name);
  };
  const retrieveCategories = () => {
    ProductService.getCategories()
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <Wrapper>
      {loading ? (
        <ActivityIndicator visible={loading}
          textContent={'Loading...'}
          size="large"
          color="#0000ff"
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <HeaderTitle title="Home" />
          <View>
            <CategoryList
              Categories={categories}
              SelectedCategory={selectedCategory}
              SetSelectedCategory={setSelectedCategoryId}
            />
          </View>

          <ProductList Products={productList} />
          <View style={{position: 'absolute', bottom: 20, right: 20}}>
            <FloatingButton />
          </View>
        </View>
      )}
    </Wrapper>
  );
};
export default HomeScreen;
