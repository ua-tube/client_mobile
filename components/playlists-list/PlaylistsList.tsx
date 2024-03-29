import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IPlaylist } from '@/interfaces'
import { router } from 'expo-router'
import { Image } from 'expo-image'
import React from 'react'

interface IPlaylistsListProps {
	playlists: IPlaylist[]
	title?: string
}

const PlaylistsList: React.FC<IPlaylistsListProps> = ({ playlists, title }) => {
	return (<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<FlatList
				data={playlists}
				keyExtractor={item => item.id}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						key={index}
						style={styles.playlistCard}
						onPress={() => router.navigate(`/playlist/${item.id}`)}
					>
						<Image source={{ uri: item.imgUrl }} style={styles.playlistThumbnail} />
						<View style={styles.playlistInfo}>
							<Text style={styles.playlistTitle}>{item.name}</Text>
							<Text style={styles.playlistCount}>{item.videos?.length} videos</Text>
							<Text style={styles.playlistChannel}>{item.channel?.name}</Text>
						</View>
					</TouchableOpacity>
				)}
			/></View>
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
	playlistCard: {
		borderRadius: 10,
		backgroundColor: '#444',
		padding: 10,
		marginBottom: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	playlistThumbnail: {
		width: 140,
		height: 80,
		borderRadius: 10,
		marginRight: 10
	},
	playlistInfo: {
		flex: 1
	},
	playlistTitle: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 16
	},
	playlistCount: {
		color: '#ddd',
		fontSize: 12,
		marginTop: 3
	},
	playlistChannel: {
		color: '#ddd',
		fontSize: 12,
		marginTop: 3
	}
})

export default PlaylistsList
