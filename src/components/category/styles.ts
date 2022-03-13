import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
  },
  categoryCard: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  categoryName:{
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedBackground:{
    backgroundColor: '#fff',
  },
  selectedText:{
    color: '#000',
  },
});
export default styles;
