import React from 'react';
import {Props} from './product-card';
import {TouchableOpacity, View} from 'react-native';
import Plus from '../../assets/icons/plus';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const FloatingButton: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <View style={styles.floatingButton}>
        <Plus />
      </View>
    </TouchableOpacity>
  );
};
export default FloatingButton;
