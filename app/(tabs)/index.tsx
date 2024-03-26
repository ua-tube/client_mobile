import CategoryPills from '@/components/categories/CategoryPills'
import VideosList from '@/components/video/videos-list'
import { StyleSheet, View } from 'react-native'
import { categories, videos } from '@/data'

export default function HomeScreen() {
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
