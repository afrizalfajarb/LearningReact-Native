import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Judul/>
            <Text>Afrizal Fajar Barokah</Text>
            <Text>XI RPL 4</Text>
            <Text>03</Text>
            <Text>Ganteng Maksimal</Text>
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
