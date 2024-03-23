import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native'

const LoginScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/images/logo.png')} style={styles.logo} />
			<TextInput
				style={styles.input}
				placeholder='Введіть ваш email'
				keyboardType='email-address'
				autoCapitalize='none'
			/>
			<TextInput
				style={styles.input}
				placeholder='Введіть ваш пароль'
				secureTextEntry
			/>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Увійти</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	logo: {
		width: 150,
		height: 150,
		marginBottom: 20
	},
	input: {
		width: '80%',
		height: 50,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10
	},
	button: {
		width: '80%',
		height: 50,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
})

export default LoginScreen
