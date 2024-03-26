import React, { FC } from 'react'
import { IVideo } from '@/interfaces'
import { ResizeMode, Video } from 'expo-av'
import { StyleSheet, View } from 'react-native'

interface IVideoPlayerProps {
	video?: IVideo
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ video }) => {
	return <View style={styles.videoContainer}>
		<Video
			source={{ uri: `http://185.154.14.126/api/videos/${video?.id}/720p.mp4` }}
			useNativeControls
			resizeMode={ResizeMode.COVER}
			isLooping
			shouldPlay
			style={styles.videoPlayer}
		/>
	</View>
}

const styles = StyleSheet.create({
	videoContainer: {
		width: '100%',
		aspectRatio: 16 / 9,
		backgroundColor: '#000'
	},
	videoPlayer: {
		flex: 1
	}
})

export default VideoPlayer
