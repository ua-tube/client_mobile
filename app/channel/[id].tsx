import { StyleSheet, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { ResizeMode, Video } from 'expo-av'
import { defaultComments, videos } from '@/data'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CommentsBlock from '@/components/video/comments-block/CommentsBlock'
import AboutVideo from '@/components/video/about-video/AboutVideo'

const ChannelPage: React.FC = () => {
	const { top } = useSafeAreaInsets()
	const { id } = useLocalSearchParams()
	const video = videos.find(value => value.id === id)

	return (
		<View style={[styles.container, { top }]}>
			<View style={styles.videoContainer}>
				<Video
					source={{ uri: `http://185.154.14.126/api/videos/${video?.id}/720p.mp4` }}
					useNativeControls
					resizeMode={ResizeMode.COVER}
					isLooping
					shouldPlay
					style={styles.videoPlayer}
				/>
			</View>
			<AboutVideo video={video} />
			<CommentsBlock comments={defaultComments} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222'
	},
	videoContainer: {
		width: '100%',
		aspectRatio: 16 / 9,
		backgroundColor: '#000'
	},
	videoPlayer: {
		flex: 1
	}

})

export default ChannelPage
