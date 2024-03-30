import { ThemeProvider } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import LoadingSpinner from '@/components/LoadingSpinner'
import * as SplashScreen from 'expo-splash-screen'
import { myTheme } from '@/constants'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

export { ErrorBoundary } from 'expo-router'

function RootLayoutNav() {
	return (
		<ThemeProvider value={myTheme}>
			<Stack initialRouteName="(tabs)">
				<Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
				<Stack.Screen name="video/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="channel/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="playlist/[id]" options={{ headerShown: false }} />
				<Stack.Screen name="search" options={{ presentation: 'modal', title: 'Search' }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	)
}

export default function RootLayout() {
	const [loaded] = useFonts(FontAwesome.font)

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync().catch()
	}, [loaded])

	if (!loaded) return <LoadingSpinner color="yellow" />

	return <RootLayoutNav />
}


