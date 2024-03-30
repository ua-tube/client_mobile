import { FlatList, StyleSheet, Text, View } from 'react-native'
import { IVideo } from '@/interfaces'
import VideoCard from './VideoCard'
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
				nestedScrollEnabled
				keyExtractor={item => item.id}
				renderItem={({ item }) => <VideoCard key={item.id} video={item} />}
				contentContainerStyle={styles.grid}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 16,
		color: '#fff'
	},
	grid: {
		paddingHorizontal: 10,
		paddingTop: 16,
		gap: 4
	}
})

export default VideosList
