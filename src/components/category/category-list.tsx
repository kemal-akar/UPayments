import React from 'react';
import ICategory from '../../types/category-type';
import {Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useRoute } from "@react-navigation/native";
export type Props = {
  Categories: Array<ICategory>;
  SelectedCategory: number;
  SetSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};
const CategoryList: React.FC<Props> = ({
  Categories,
  SelectedCategory,
  SetSelectedCategory,
}) => {
  const route = useRoute();

  return (
    <ScrollView
      contentContainerStyle={styles.categoryContainer}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {route.name !== 'Create' && (
        <TouchableOpacity key={0} onPress={() => SetSelectedCategory('All')}>
          <View
            key={0}
            style={[
              styles.categoryCard,
              SelectedCategory === 'All' ? styles.selectedBackground : ' ',
            ]}>
            <Text
              style={[
                styles.categoryName,
                SelectedCategory === 'All' ? styles.selectedText : ' ',
              ]}>
              All
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {Categories.map((category: ICategory) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => SetSelectedCategory(category.name)}>
          <View
            key={category.id}
            style={[
              styles.categoryCard,
              SelectedCategory === category.name
                ? styles.selectedBackground
                : ' ',
            ]}>
            <Text
              style={[
                styles.categoryName,
                SelectedCategory === category.name ? styles.selectedText : ' ',
              ]}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default CategoryList;
