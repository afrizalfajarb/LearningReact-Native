import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Nama : Afrizal Fajar Barokah</Text>
            <Text>Kelas : XI RPL 4</Text>
            <Text>Absen : 03</Text>
            <Image
    source={require('./afrizal.jpg')}
    style={ { height: 576 , width:876}}/>

               
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
