import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';

import {Field} from 'formik';
import * as Yup from 'yup';
import styles from '../components/createForm/styles';
import CreateFormField from '../components/createForm/createFormField';
import CreateForm from '../components/createForm/createForm';
import CategoryList from '../components/category/category-list';
import ProductService from '../services/product-service';
import ICategory from '../types/category-type';
import CreateFormSubmit from '../components/createForm/createFormSubmit';
import {useNavigation} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product title is required')
    .label('Product Title'),
  price: Yup.number().required('Product price is required').label('Price'),
  description: Yup.string()
    .required('Product description is required')
    .label('Description'),
  avatar: Yup.string()
    .required('Product avatar is required')
    .label('Image link'),
});

const CreateProductScreen: React.FC = () => {
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  useEffect(() => {
    retrieveCategories();
  }, []);
  const retrieveCategories = () => {
    ProductService.getCategories()
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const setSelectedCategoryId = (name: string) => {
    setSelectedCategory(name);
  };
  const submitForm = (values: any) => {
    values.category = selectedCategory;
    setLoading(true);
    ProductService.createProduct(values)
      .then((response: any) => {
        if (response.data.id > 0) {
          setLoading(false);
          setTimeout(() => {
            Alert.alert('New product addeed...');
            navigation.navigate('Home');
          }, 1000);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          visible={loading}
          textContent={'Loading...'}
          size="large"
          color="#0000ff"
        />
      ) : (
        <CreateForm
          initialValues={{name: '', price: '', description: '', avatar: ''}}
          validationSchema={validationSchema}
          onSubmit={(values: any) => submitForm(values)}>
          <Field
            component={CreateFormField}
            name="name"
            style={styles.input}
            placeholder="Product title"
          />
          <Field
            component={CreateFormField}
            name="price"
            style={styles.input}
            placeholder="Price"
          />
          <Field
            component={CreateFormField}
            name="description"
            style={[styles.input, {textAlignVertical: 'top', height: 100}]}
            multiline={true}
            placeholder="Description"
          />
          <Field
            component={CreateFormField}
            name="avatar"
            style={styles.input}
            placeholder="Image link"
          />
          <Text>Selected Category : {selectedCategory}</Text>
          <View style={{marginTop: 10}}>
            <CategoryList
              Categories={categories}
              SelectedCategory={selectedCategory}
              SetSelectedCategory={setSelectedCategoryId}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              position: 'absolute',
              bottom: 20,
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <CreateFormSubmit title={'Add Product'} />
          </View>
        </CreateForm>
      )}
    </View>
  );
};

export default CreateProductScreen;
