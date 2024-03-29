import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useAssets } from 'expo-asset'

const AuthPage: React.FC = () => {
	const [assets] = useAssets([require('@/assets/images/logo.png')])
	const [logoOpacity] = useState(new Animated.Value(0))
	const [logoScale] = useState(new Animated.Value(0.8))
	const [titleOpacity] = useState(new Animated.Value(0))
	const [buttonsOpacity] = useState(new Animated.Value(0))

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
			}),
			Animated.timing(buttonsOpacity, {
				toValue: 1,
				duration: 1000,
				delay: 1000,
				useNativeDriver: true
			})
		]).start()
	}, [])

	return (
		<LinearGradient colors={['#333', '#444']} style={styles.container}>
			<View style={styles.logoContainer}>
				<Animated.Image
					source={{ uri: assets?.[0]?.uri || '' }}
					style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
				/>
			</View>
			<Animated.Text style={[styles.title, { opacity: titleOpacity }]}>UaTube</Animated.Text>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain'
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	buttons: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	button: {
		borderRadius: 10,
		backgroundColor: '#444',
		padding: 10,
		margin: 10,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 16
	}
})

export default AuthPage
