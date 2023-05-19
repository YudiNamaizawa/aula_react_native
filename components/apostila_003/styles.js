import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#F5F5F5', 
      padding: 8, 
      alignItems: 'center',
    }, 
    paragraph: {
      margin: 24, 
      fontSize: 26, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#9E9E9E', 
    }, 
    button: {
      backgroundColor: '#9E9E9E', 
      height: 60, 
      justifyContent: 'center', 
      marginBottom: 10, 
      width: 90,
      alignItems: 'center',
    }, 
    buttonzero :{
      backgroundColor: '#9E9E9E',
      height: 60,
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 30,
      width: 250,
      alignItems: 'center',
    },
    textButton: {
      fontSize: 20, 
      color: '#fff', 
      textAlign: 'center', 
    }, 
    counter: {
      borderWidth: 4, 
      borderColor: '#9E9E9E', 
      padding: 30,  
      marginTop: 8, 
      justifyContent: 'center',
    }, 
    textCounter: {
      fontSize: 32, 
      color: '#424242', 
      textAlign: 'center',    
      fontWeight: 'bold', 
      padding: 8, 
      marginLeft: 20,
      marginRight: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });

  export default styles;