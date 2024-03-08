import { FlatList, StyleSheet, Text, View } from 'react-native'
import VideoCard from './VideoCard'
import { IVideo } from '@/interfaces'
import React, { FC } from 'react'

interface IVideosListProps {
	title?: string
	videos: IVideo[]
}

const VideosList: FC<IVideosListProps> = ({ videos, title }) => {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<FlatList
				data={videos}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => <VideoCard key={index} {...item} />}
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
		paddingTop: 16,
	}
})

export default VideosList
