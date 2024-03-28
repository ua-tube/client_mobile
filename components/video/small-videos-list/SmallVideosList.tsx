import { FlatList, StyleSheet, Text, View } from 'react-native'
import SmallVideoCard from './SmallVideoCard'
import { IVideo } from '@/interfaces'
import React, { FC } from 'react'

interface ISimilarVideosProps {
	videos: IVideo[]
	title?: string
}

const SmallVideosList: FC<ISimilarVideosProps> = ({ videos, title }) => {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<FlatList
				data={videos}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <SmallVideoCard key={item.id} video={item} />}
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

export default SmallVideosList
