import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RelatedVideosList from '@/components/video/related-videos'
import CommentsBlock from '@/components/video/comments-block'
import VideoPlayer from '@/components/video/video-player'
import AboutVideo from '@/components/video/about-video'
import { ScrollView, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { defaultComments, videos } from '@/data'
import React from 'react'

const VideoPage: React.FC = () => {
	const { id } = useLocalSearchParams()
	const video = videos.find(value => value.id === id)
	const { top } = useSafeAreaInsets()

	return (
		<ScrollView style={[styles.container, { top }]} horizontal={false}>
			<VideoPlayer video={video} />
			<AboutVideo video={video} />
			<CommentsBlock comments={defaultComments} />
			<RelatedVideosList videos={videos.slice(0,6)} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
		marginBottom: 70
	}
})

export default VideoPage
