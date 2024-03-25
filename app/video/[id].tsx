import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { ResizeMode, Video } from 'expo-av'
import { videos } from '@/data'
import React from 'react'

const VideoPage: React.FC = () => {
	const { id } = useLocalSearchParams()
	const video = videos.find(value => value.id === id)

	return (
		<View style={styles.container}>
			<View style={styles.videoContainer}>
				<Video
					source={{ uri: `http://185.154.14.126/api/videos/${video?.id}/720p.mp4` }}
					useNativeControls
					resizeMode={ResizeMode.COVER}
					isLooping
					style={styles.videoPlayer}
				/>
			</View>
			<View style={styles.videoInfoContainer}>
				<Text style={styles.videoTitle}>{video?.title}</Text>
				<Text numberOfLines={2} style={styles.videoDescription}>
					{video?.description}
				</Text>
				<TouchableOpacity style={styles.subscribeButton}>
					<Text style={styles.subscribeButtonText}>Підписатися</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	videoContainer: {
		width: '100%',
		aspectRatio: 16 / 9,
		backgroundColor: '#000'
	},
	videoPlayer: {
		flex: 1
	},
	videoInfoContainer: {
		padding: 10
	},
	videoTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5
	},
	videoDescription: {
		fontSize: 16,
		marginBottom: 5
	},
	subscribeButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		alignSelf: 'flex-start'
	},
	subscribeButtonText: {
		color: 'white',
		fontWeight: 'bold'
	}
})

export default VideoPage
