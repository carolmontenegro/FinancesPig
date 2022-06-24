import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from './_headerButton'

export function Header({ name }) {
	return (
		<View style={[styles.container]}>
			<View style={[styles.containerButtons]}>
				<HeaderButton icon='user' />
				<View style={{ flexDirection: 'row' }}>
					
					<HeaderButton icon='questioncircleo' opacity />
					<HeaderButton icon='mail' opacity />
				</View>
			</View>
			<Text style={[styles.text]} numberOfLines={1}>
				Olá, {name}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FF8000',
		height: 160,
		padding: 24,
		justifyContent: 'flex-end',
	},
	containerButtons: {
		marginBottom: 32,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
		color: '#fff',
	},
})