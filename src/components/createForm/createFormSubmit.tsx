import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useFormikContext} from 'formik';

interface CreateFormSubmitButtonProps {
  title: string;
}

const CreateFormSubmit = ({title}: CreateFormSubmitButtonProps) => {
  const {handleSubmit, isValid} = useFormikContext();
  return (
    <View style={{backgroundColor: '#000', borderRadius: 10, height:35, paddingHorizontal:10, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
        <Text style={{color:'#fff'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateFormSubmit;
