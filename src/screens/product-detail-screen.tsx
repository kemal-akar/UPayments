import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import IProduct from '../types/product-type';
import styles from '../components/productList/styles';
import GoBack from '../assets/icons/goback';
import {useNavigation} from '@react-navigation/native';
export type Props = {
  route: any;
};

const ProductDetailScreen: React.FC<Props> = ({route}) => {
  const {ProductItem} = route.params;
  const {goBack} = useNavigation();
  return (
    <View style={styles.productDetailContainer}>
      <View style={styles.pictureBox}>
        <Image
          style={styles.picture}
          source={{
            uri: ProductItem.avatar
              ? ProductItem.avatar
              : 'https://via.placeholder.com/150',
          }}
        />
      </View>
      <View
        style={styles.productDetailBottom}>
        <View style={styles.productBottomInfo}>
          <TouchableOpacity onPress={() => goBack()}>
            <GoBack />
          </TouchableOpacity>
          <Text style={styles.productInfoText}>
            {ProductItem.name}
          </Text>
          <Text style={styles.productInfoText}>
            {'\u0024'}
            {ProductItem.price}
          </Text>
        </View>
        <Text style={styles.description}>
          {ProductItem.description}
        </Text>
      </View>
    </View>
  );
};
export default ProductDetailScreen;
