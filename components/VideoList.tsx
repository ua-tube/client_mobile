import { FlatList, StyleSheet, Text, View } from 'react-native'
import { formatNumbers, formatTimeAgo } from '@/utils'
import { IVideo } from '@/interfaces'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React, { FC } from 'react'

interface IVideosListProps {
	title?: string
	videos: IVideo[]
}

const VideoCard: FC<{
	video: IVideo
}> = ({ video }) => {
	return (
		<View style={{ borderRadius: 8, backgroundColor: '#fff', marginBottom: 8 }}>
			<Link href={`/video/${video.id}`}>
				<Image
					source={{ uri: video.thumbnailUrl }}
					style={{ width: 'auto', aspectRatio: 16 / 9, borderRadius: 8 }}
					contentFit="cover"
					transition={1000}
				/>
			</Link>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 8,
					paddingTop: 8,
					maxWidth: '90%'
				}}
			>
				<Link href={`/video/${video.id}`}>
					<Image
						source={{ uri: video.channel.profileImg }}
						style={{ width: 36, height: 36, borderRadius: 18 }}
						contentFit="cover"
					/>
				</Link>
				<View style={{ marginLeft: 8, marginBottom: 2 }}>
					<Link href={`/video/${video.id}`}>
						<Text
							numberOfLines={2}
							style={{ fontWeight: 'bold' }}
							children={video.title}
						/>
					</Link>
					<Text style={{ color: '#666', fontSize: 12 }}>{video.channel.name}</Text>
					<Text
						style={{ color: '#666', fontSize: 12 }}
						children={`${formatNumbers(video.views)} views • ${formatTimeAgo(video.postedAt)}`}
					/>
				</View>
			</View>
		</View>
	)
}

const VideosList: FC<IVideosListProps> = ({ videos, title }) => {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<FlatList
				data={videos}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => <VideoCard key={index} video={item} />}
				contentContainerStyle={styles.grid}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		marginTop: 16
	},
	grid: {
		paddingHorizontal: 20,
		paddingTop: 16
	}
})

export default VideosList
