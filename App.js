import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Judul title="BIODATA"/>
            <Judul title="LOGIN"/>
            <Judul title="FORM"/>
            <Text>Afrizal Fajar Barokah</Text>
            <Text>XI RPL 4</Text>
            <Text>03</Text>
            <Image
    source={require('./afrizal.jpg')}
    style={ { height: 200 , width:200}}/>

               
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
