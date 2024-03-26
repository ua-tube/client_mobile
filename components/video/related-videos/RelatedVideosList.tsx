import { FlatList, StyleSheet, Text, View } from 'react-native'
import RelatedVideoCard from './RelatedVideoCard'
import { IVideo } from '@/interfaces'
import React, { FC } from 'react'

interface ISimilarVideosProps {
	videos: IVideo[]
}

const SimilarVideos: FC<ISimilarVideosProps> = ({ videos }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Related videos</Text>
			<FlatList
				data={videos}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <RelatedVideoCard key={item.id} video={item} />}
				contentContainerStyle={styles.grid}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: '#333',
		margin: 10
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#fff',
		paddingHorizontal: 10
	},
	grid: {
		paddingHorizontal: 10,
		paddingTop: 10
	}
})

export default SimilarVideos
