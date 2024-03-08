import { useClientOnlyValue, useColorScheme } from '@/hooks'
import { Image, Pressable, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs, SplashScreen, Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import React from 'react'

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name']
	color: string
}) {
	return <FontAwesome
		size={28}
		style={{ marginBottom: -3 }}
		{...props}
	/>
}

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: useClientOnlyValue(false, true)
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Головна',
					headerLeft: () => (
						<View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginLeft: 15, gap: 5 }}>
							<Image
								style={{
									width: 30,
									height: 30
								}}
								source={require('@/assets/images/logo.png')}
							/>
							<Text style={{ color: Colors[colorScheme ?? 'light'].text, fontWeight: 'bold', fontSize: 20 }}
										children="UaTube" />
						</View>
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="search"
										size={25}
										color={Colors[colorScheme ?? 'light'].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
					headerTitle: '',
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
				}}
			/>
			<Tabs.Screen
				name="video-create"
				options={{
					title: 'Створити',
					tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />
				}}
			/>
			<Tabs.Screen
				name="user"
				options={{
					title: 'Я',
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
				}}
			/>
		</Tabs>
	)
}
