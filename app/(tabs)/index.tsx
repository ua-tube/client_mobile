import CategoryPills from '@/components/CategoryPills'
import VideosList from '@/components/VideoList'
import { StyleSheet, View } from 'react-native'
import { categories, videos } from '@/data'

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<CategoryPills categories={categories} />
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
