import React from 'react';
import {Text} from 'react-native';
class Judul extends React.Component{
	render(){
		return(
			<Text style = {style.Header}>{this.props.title}</Text>
			)
	}

}
const style = {
	Header:{
		color : 'red',
		fontSize: 50,
		backgroundColor: 'white'
	}
}
export default Judul;