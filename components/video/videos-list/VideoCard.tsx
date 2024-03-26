import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { formatNumbers, formatTimeAgo } from '@/utils'
import { IVideo } from '@/interfaces'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import React from 'react'

const VideoCard: React.FC<{
	video: IVideo
}> = ({ video }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Link href={`/video/${video.id}`}>
				<Image
					source={{ uri: video.thumbnailUrl }}
					style={styles.thumbnail}
					contentFit="cover"
				/>
			</Link>
			<View style={styles.infoContainer}>
				<Link href={`/channel/${video.channel.id}`}>
					<Image
						source={{ uri: video.channel.profileImg }}
						style={styles.channelImage}
						contentFit="cover"
					/>
				</Link>
				<View style={styles.textContainer}>
					<Link href={`/video/${video.id}`}>
						<Text numberOfLines={2} style={styles.title}>
							{video.title}
						</Text>
					</Link>
					<Link href={`/channel/${video.channel.id}`} style={styles.channelName}>{video.channel.name}</Link>
					<Text style={styles.stats}>
						{`${formatNumbers(video.views)} views • ${formatTimeAgo(video.postedAt)}`}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: '#333', // Updated background color
		marginBottom: 8,
		padding: 10
	},
	thumbnail: {
		width: '100%',
		aspectRatio: 16 / 9,
		borderRadius: 8
	},
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	},
	channelImage: {
		width: 36,
		height: 36,
		borderRadius: 18
	},
	textContainer: {
		marginLeft: 8,
		flex: 1
	},
	title: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 16
	},
	channelName: {
		color: '#ddd',
		fontSize: 12,
		marginTop: 2
	},
	stats: {
		color: '#ccc',
		fontSize: 12,
		marginTop: 2
	}
})

export default VideoCard
