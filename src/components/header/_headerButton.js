import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export function HeaderButton({ icon, ...props }) {
	return (
		<TouchableOpacity style={[styles.buttonOpacity, !props.opacity && styles.button]}>
			<AntDesign name={icon} size={24} color='#fff' />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonOpacity: {
		borderRadius: 50,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: 'rgba(255,255,255,0.3)',
	},
})