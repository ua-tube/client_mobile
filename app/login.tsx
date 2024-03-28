import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function ModalScreen() {
	return (
		<View style={styles.container}>

			<StatusBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
