import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider
} from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import LoadingSpinner from '@/components/LoadingSpinner'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme } from '@/hooks'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)'
}

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync()
	}, [loaded])

	if (!loaded) {
		return <LoadingSpinner color='red' />
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
			</Stack>
		</ThemeProvider>
	)
}
