import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '48%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  productImage:{
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productInfoBox:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#000',
    borderRadius: 4,
    paddingVertical: 5,
  },
  productInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    paddingHorizontal: 10,
  },
  productName:{
    fontSize: 12,
    color: '#fff',

  },
  editIcon:{


  },
  floatingButton:{
    backgroundColor: '#fff',
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  productDetailBottom:{
    backgroundColor: '#000',
    flex: 1,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productDetailContainer:{
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
  },
  pictureBox:{height: 380, marginTop: 10, padding: 10},
  picture: {height: 320, resizeMode: 'contain'},
  productBottomInfo:{flexDirection: 'row', justifyContent: 'space-between'},
  productInfoText:{color: '#fff', fontSize: 20, fontWeight: 'bold'},
  description:{color: '#fff', fontSize: 14, marginTop: 20}



});
export default styles;
