import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { IPlaylist, IVideo } from '@/interfaces'
import React, { useState } from 'react'
import { playlists } from '@/data'

interface IPlaylistModalProps {
	onClose: () => void
	visible: boolean
	video?: IVideo
}

const PlaylistModal: React.FC<IPlaylistModalProps> = ({ onClose, video, visible }) => {
	const [selectedPlaylists, setSelectedPlaylists] = useState<IPlaylist[]>([
		...playlists.filter(p => p.videos?.some(v => v.id === video?.id))
	])

	const handleAdd = () => {
		// TODO Implement logic to add video to selected playlists
		onClose()
	}


	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.container}>
				<View style={styles.modal}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Add to playlist</Text>
						<TouchableOpacity
							onPress={onClose}
							style={styles.closeButton}>
							<FontAwesome
								name="close"
								style={styles.closeButtText}
							/>
						</TouchableOpacity>
					</View>

					<Text style={styles.description}>Choose the playlists you want to add to:</Text>
					<FlatList
						data={playlists}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							const playlistAlreadySelected = selectedPlaylists.some(v => v.id === item.id)
							return <TouchableOpacity
								key={item.id}
								style={[styles.playlistButton, playlistAlreadySelected && styles.selected]}
								onPress={() => setSelectedPlaylists(playlistAlreadySelected ? selectedPlaylists.filter((p) => p.id !== item.id) : [...selectedPlaylists, item])}
							>
								<Text style={styles.playlistText}>{item.name}</Text>
								{playlistAlreadySelected && <FontAwesome name="check" style={styles.playlistText} />}
							</TouchableOpacity>
						}}
					/>
					<TouchableOpacity style={styles.button} onPress={handleAdd}>
						<Text style={styles.buttonText}>Save</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	modal: {
		backgroundColor: '#333',
		borderRadius: 10,
		padding: 20,
		width: '80%',
		maxWidth: 400
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},
	closeButton: {
		borderRadius: 5,
		padding: 5,
		backgroundColor: '#444',
		borderStyle: 'solid',
		borderColor: '#222'
	},
	closeButtText: {
		color: '#fff',
		fontSize: 20
	},
	description: {
		color: '#ddd',
		fontSize: 16,
		marginBottom: 10
	},
	playlistButton: {
		borderRadius: 10,
		backgroundColor: '#444',
		padding: 10,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	selected: {
		backgroundColor: '#666'
	},
	playlistText: {
		color: '#fff',
		fontSize: 16
	},
	button: {
		borderRadius: 10,
		backgroundColor: '#444',
		padding: 10,
		marginTop: 10
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})

export default PlaylistModal
