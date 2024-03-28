import VideosList from '@/components/video/videos-list'
import { StyleSheet, View } from 'react-native'
import { videos } from '@/data'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<VideosList videos={videos} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	}
})
