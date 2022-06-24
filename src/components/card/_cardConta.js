import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { Card } from '.'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export function CardConta({ amount = 0.0, ...props }) {

	const [receita, setReceita] = useState("");
    const [gasto, setGasto] = useState("");

	const saveValor = async () => {

		const valor = {
			gasto: gasto,
			receita: receita
			
		}
		await asyncStorageSave(valor);
	   
		
	} 

	 function calcular (receita, gasto) {

		const saldo= receita - gasto;

		setSaldo(integer.parse(saldo));

	  	

	}
	const [saldo, setSaldo] = useState("");

   const asyncStorageSave = async (valor) => {
	try {
		
		await AsyncStorage.setItem('valor', JSON.stringify(valor));
		console.log('salvou no asyncstorage');
	} catch (error) {
		
		console.log('erro ao salvar no asyncstorage');
	}
}

	return (

        
		<Card {...props}>
			<Text style={[styles.label, styles.title]}>Saldo</Text>
			<Text style={[styles.label, styles.value]}>R$ {amount.toLocaleString('pt-BR')}</Text>
			<TextInput value={gasto} onChangeText={(e) => setGasto(e)} placeholder="Gasto" style={styles.input}></TextInput>
            <TextInput value={receita} onChangeText={(e) => setReceita(e)}  placeholder="Receita" style={styles.input}></TextInput>			
			<ScrollView horizontal>
			<View style={styles.buttonContainer}>
				
				<Button icon='barcode' style={styles.loginButton} text='Calcular' onPress={calcular}  />
				
                
            </View>
					
			</ScrollView>
			
          
				
				
		</Card>
		
	);
}


function Button({ icon = 'qrcode', text = 'NA' }) {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.buttonImageContainer}>
				<AntDesign name={icon} size={24} color='black' />
			</View>
			<Text style={[styles.label, styles.buttonLabel]}>{text}</Text>
		</TouchableOpacity>
	)
}

function BarButton({ icon = 'qrcode', text = 'na' }) {
	return (
		<TouchableOpacity style={styles.barButton}>
			<AntDesign name={icon} size={24} color='black' style={styles.barButtonIcon} />
			<Text style={[styles.label, styles.barButtonLabel]}>{text}</Text>
		</TouchableOpacity>
	)
}



const styles = StyleSheet.create({
	label: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 16,
	},
	title: {
		fontSize: 20,
	},
	value: {},
	button: {
		margin: 16,
		marginLeft: 8,
		marginRight: 8,
		alignItems: 'center',
	},
	buttonImageContainer: {
		marginBottom: 12,
		backgroundColor: '#e3e3e3',
		padding: 24,
		borderRadius: 50,
	},
	buttonLabel: {
		fontSize: 16,
	},
	barButton: {
		backgroundColor: '#e3e3e3',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 24,
		margin: 16,
		borderRadius: 8,
	},
	barButtonIcon: {
		marginRight: 16,
	},
	barButtonLabel: {
		fontSize: 16,
		marginBottom: 0,
	},
	input: {
		height: 40,
		margin:30,
		width: 150,
		borderWidth: 2,
		padding: 20,
		fontSize:16,
		
	  },
	 
	  
	
}) 