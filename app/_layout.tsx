import { ThemeProvider } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import LoadingSpinner from '@/components/LoadingSpinner'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

export { ErrorBoundary } from 'expo-router'


export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font
	})

	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync()
	}, [loaded])

	if (!loaded)
		return <LoadingSpinner color="red" />


	return <RootLayoutNav />
}

function RootLayoutNav() {
	const MyTheme = {
		dark: false,
		colors: {
			primary: 'rgb(255, 45, 85)',
			background: '#444',
			card: '#333',
			text: '#fff',
			border: 'rgb(199, 199, 204)',
			notification: 'rgb(255, 69, 58)'
		}
	}

	return (
		<ThemeProvider value={MyTheme}>
			<Stack initialRouteName="(tabs)">
				<Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
				<Stack.Screen name="video/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="channel/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="playlist/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="search" options={{ presentation: 'modal', title: 'Search' }} />
				<Stack.Screen name="login" options={{ presentation: 'modal', title: 'Login' }} />
			</Stack>
		</ThemeProvider>
	)
}
