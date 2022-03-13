import React from 'react';
import {View, Text} from 'react-native';
import styles from "./styles";
const Wrapper: React.FC = props => {
  return <View style={styles.wrapper}>{props.children}</View>;
};

export default Wrapper;
