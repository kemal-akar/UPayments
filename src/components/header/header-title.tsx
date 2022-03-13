import React from 'react';
import {View, Text} from 'react-native';
import Search from '../../assets/icons/search';
import styles from './styles';
const HeaderTitle: React.FC = () => {
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text style={styles.title}>UPayments Store</Text>
        <Search />
      </View>
    </View>
  );
};

export default HeaderTitle;
