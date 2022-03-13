import React from 'react';
import {Text, TextInput} from 'react-native';
import IProduct from '../../types/product-type';
export type Props = {
  ProductItem: IProduct;
};
const CreateFormField  = (props: any) => {
  const {
    placeholder,
    style,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <>
      {touched[name] && <Text style={{marginBottom:5}}>{placeholder}</Text>}
      <TextInput
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        style={style}
        {...inputProps}
      />
      {hasError && <Text style={{color: 'red'}}>{errors[name]}</Text>}
    </>
  );
};

export default CreateFormField;
