import React from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'


import porquinho from '../../img/pig.png';

export function Content(props) {


	return (
		<View style={[styles.container]}>
			
			<ScrollView>{props.children}
		
	
		<Image source = {porquinho}  style = {styles.img}/>
	
</ScrollView>
</View>
		
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF8000',
	},
	img: {
		width:150,
		height: 250,
		resizeMode: 'contain',
		marginTop: 1,
		padding: 10,
		marginLeft: 250,
		marginRight: 500
		
	

		
	},
	
})