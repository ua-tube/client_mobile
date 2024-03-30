import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

const NotFoundPage: React.FC = () => {
	const { top } = useSafeAreaInsets()
	const [titleOpacity] = useState(new Animated.Value(0))

	useEffect(() => {
		Animated.parallel([
			Animated.timing(titleOpacity, {
				toValue: 1,
				duration: 500,
				delay: 200,
				useNativeDriver: true
			})
		]).start()
	}, [])

	return (
		<View style={[styles.container, { paddingTop: top }]}>
			<Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
				Oops! We can't find what you're looking for.
			</Animated.Text>
			<Animated.Text style={[styles.description, { opacity: titleOpacity }]}>
				The page you requested may not exist or has been moved.
			</Animated.Text>
			<Animated.View style={{ opacity: titleOpacity }}>
				<TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
					<LinearGradient
						colors={['#222', '#555']}
						style={styles.gradient}
					>
						<Text style={styles.buttonText}>Go to Home</Text>
					</LinearGradient>
				</TouchableOpacity>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#333'
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10
	},
	description: {
		color: '#ddd',
		textAlign: 'center',
		fontSize: 16,
		maxWidth: '60%'
	},
	button: {
		marginTop: 10,
		borderRadius: 10,
		width: 200,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	gradient: {
		flex: 1,
		borderRadius: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default NotFoundPage
