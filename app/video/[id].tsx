import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SmallVideosList from '@/components/video/small-videos-list'
import CommentsBlock from '@/components/video/comments-block'
import VideoPlayer from '@/components/video/video-player'
import AboutVideo from '@/components/video/about-video'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { defaultComments, videos } from '@/data'
import React from 'react'

const VideoPage: React.FC = () => {
	const { id } = useLocalSearchParams()
	const video = videos.find(value => value.id === id)
	const { top, bottom } = useSafeAreaInsets()

	return (
		<ScrollView style={[styles.container, { top, bottom }]}>
			<VideoPlayer video={video} />
			<AboutVideo video={video} />
			<CommentsBlock comments={defaultComments} />
			<View style={styles.endItem}>
				<SmallVideosList videos={videos.slice(0, 6)} title="Related videos" />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222'
	},
	endItem: {
		marginBottom: 70
	}
})

export default VideoPage
