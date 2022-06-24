import React from 'react'
import { CardConta, Container, Content, Header } from './src/components'




export default function App(props) {

	
	return (

		
		<Container>
			<Header name='Carol Montenegro' {...props} />
			<Content {...props}>
				<CardConta amount={0.0} />
			</Content>
			
 
     		</Container> 
						


   
	)}

		
	
  




