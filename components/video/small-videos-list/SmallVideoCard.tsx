import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Link, router } from 'expo-router'
import { IVideo } from '@/interfaces'
import { Image } from 'expo-image'
import React, { FC } from 'react'

interface ISmallVideoCardProps {
	video: IVideo
}


const SmallVideoCard: FC<ISmallVideoCardProps> = ({ video }) => {

	return (
		<TouchableOpacity style={styles.container}>
			<TouchableOpacity onPress={() => router.navigate(`/video/${video.id}`)}>
				<Image
					source={{ uri: video.thumbnailUrl }}
					style={styles.thumbnail}
					contentFit="cover"
				/>
			</TouchableOpacity>
			<View style={styles.infoContainer}>
				<Link href={`/video/${video.id}`} style={styles.title}>
					{video.title}
				</Link>
				<Link href={`/channel/${video.channel.id}`} style={styles.channelName}>
					{video.channel.name}
				</Link>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: '#444',
		marginBottom: 8,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8
	},
	thumbnail: {
		width: 130,
		height: 75,
		borderRadius: 8,
		marginRight: 10
	},
	infoContainer: {
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
	}
})

export default SmallVideoCard
