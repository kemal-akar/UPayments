import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import IProduct from '../../types/product-type';
import {useNavigation} from '@react-navigation/native';
import Pencil from '../../assets/icons/pencil';
export type Props = {
  ProductItem: IProduct;
};
const ProductCard: React.FC<Props> = ({ProductItem}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('Detail',{ProductItem:ProductItem})}>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: ProductItem.avatar
              ? ProductItem.avatar
              : 'https://via.placeholder.com/150',
          }}
        />

        <View style={styles.productInfoBox}>
          <Text style={styles.productName}>{ProductItem.name}</Text>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{'\u0024'}{ProductItem.price}</Text>
            <View style={styles.editIcon}><Text ><Pencil/> </Text></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
