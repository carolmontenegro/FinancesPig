import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, View, Image } from 'react-native'



export function Container({ children, headerName, ...props }) {
	return (
		<View style={styles.externalContainer}>
			
			
			
			<SafeAreaView style={styles.container}>
				{children}
				<StatusBar style='auto' />

			</SafeAreaView>
			
		</View>
	)
}

const styles = StyleSheet.create({
	externalContainer: {
		backgroundColor: '#fff',
		flex: 1,
	},
	container: {
		backgroundColor: '#FF8000',
		flex: 1,
	},
	
})