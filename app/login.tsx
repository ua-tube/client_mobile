import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { useAssets } from 'expo-asset'

const AuthPage: React.FC = () => {
	const { top } = useSafeAreaInsets()
	const [assets] = useAssets([require('@/assets/images/logo.png')])
	const [logoOpacity] = useState(new Animated.Value(0))
	const [logoScale] = useState(new Animated.Value(0.8))
	const [titleOpacity] = useState(new Animated.Value(0))
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		Animated.parallel([
			Animated.timing(logoOpacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true
			}),
			Animated.timing(logoScale, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true
			}),
			Animated.timing(titleOpacity, {
				toValue: 1,
				duration: 1000,
				delay: 500,
				useNativeDriver: true
			})
		]).start()
	}, [])

	const handleLogin = () => {
		// Implement login logic here, checking `email` and `password`
		// and updating `error` state if necessary
	}

	return (
		<LinearGradient colors={['#222', '#444']} style={[styles.container, { paddingTop: top }]}>
			<Animated.Image
				source={{ uri: assets?.[0]?.uri || '' }}
				style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
			/>
			<Animated.Text style={[styles.title, { opacity: titleOpacity }]}>UaTube</Animated.Text>
			<View style={styles.inputs}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor="#ddd"
					onChangeText={setEmail}
					value={email}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					placeholderTextColor="#ddd"
					secureTextEntry={true}
					onChangeText={setPassword}
					value={password}
				/>
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Sign Up / Sign In</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	inputs: {
		width: '80%',
		margin: 10
	},
	input: {
		borderRadius: 10,
		backgroundColor: '#555',
		padding: 10,
		color: '#fff',
		fontSize: 16,
		marginBottom: 10
	},
	error: {
		color: 'red',
		fontSize: 14,
		textAlign: 'center'
	},
	button: {
		borderRadius: 10,
		backgroundColor: '#555',
		padding: 10
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	}
})

export default AuthPage
