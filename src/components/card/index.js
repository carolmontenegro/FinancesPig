   
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export function Card({ children }) {
	return <View style={styles.cardContainer}>{children}
	

	</View>
}

const styles = StyleSheet.create({
	cardContainer: {
		padding: 8,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#a1a1a1',
	},

	
})