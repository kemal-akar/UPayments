import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ListRenderItemInfo,
  ListRenderItem,
} from 'react-native';
import styles from './styles';
import IProduct from '../../types/product-type';
import ProductCard from './product-card';
export type Props = {
  Products: Array<IProduct>;
};

const ProductList: React.FC<Props> = ({Products}) => {
  const renderItem: ListRenderItem<IProduct> = ({item}) => (

    <ProductCard ProductItem={item} />

  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          alignContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <FlatList
          data={Products}
          renderItem={renderItem}
          columnWrapperStyle={{justifyContent: "space-between"}}
          numColumns={2}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
          keyExtractor={(item: IProduct, index) => {
            return index.toString();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProductList;
