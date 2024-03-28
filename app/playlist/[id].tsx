import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link, router, useLocalSearchParams } from 'expo-router'
import VideoList from '@/components/video/videos-list'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import { playlists, videos } from '@/data'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import React from 'react'

const PlaylistPage: React.FC = () => {
	const { id } = useLocalSearchParams()
	const playlist = playlists.find(value => value.id === id)

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>

				<BlurView intensity={100} style={styles.blur}>
					<Image source={{ uri: playlist?.imgUrl }} style={styles.playlistImage} />
				</BlurView>

				<LinearGradient
					colors={['transparent', '#000000']}
					style={styles.imageOverlay}
				/>

				<View style={styles.playlistInfo}>

					<View style={styles.infoLeft}>
						<FontAwesome name="play" size={32} color="#fff" style={styles.playIcon} />
						<Text style={styles.playlistName} numberOfLines={2}>{playlist?.name}</Text>
						{playlist?.isPrivate && <FontAwesome name="lock" size={30} color="#fff" style={{ marginLeft: 10 }} />}
					</View>

					<View style={[styles.infoLeft, { marginBottom: 10 }]}>
						<TouchableOpacity onPress={() => router.navigate(`/channel/${playlist?.channel?.id}`)}>
							<Image
								source={{ uri: playlist?.channel?.profileImg }}
								style={styles.profileImg}
							/>
						</TouchableOpacity>
						<Link
							href={`/channel/${playlist?.channel?.id}`}
							style={styles.playlistChannel}>
							{playlist?.channel?.name}
						</Link>
					</View>

					<View style={styles.infoLeft}>
						<FontAwesome name="list" size={20} color="#ddd" style={styles.playIcon} />
						<Text style={styles.playlistCount}>{playlist?.videosCount} videos</Text>
					</View>

					{playlist?.viewsCount && <>
						<View style={styles.infoLeft}>
							<FontAwesome name="eye" size={20} color="#ddd" style={styles.playIcon} />
							<Text style={styles.playlistCount}>{playlist?.viewsCount} views</Text>
						</View>
						<View style={styles.infoLeft}>
							<FontAwesome name="calendar" size={20} color="#ddd" style={styles.playIcon} />
							<Text style={styles.playlistCount}>Created {new Date(playlist?.createdAt!).toDateString()}</Text>
						</View>
						<View style={styles.infoLeft}>
							<FontAwesome name="calendar" size={20} color="#ddd" style={styles.playIcon} />
							<Text style={styles.playlistCount}>Updated {new Date(playlist?.updatedAt!).toDateString()}</Text>
						</View>
					</>}
				</View>
			</View>
			<VideoList videos={videos} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},
	profileImg: {
		width: 32,
		height: 32,
		borderRadius: 40
	},
	header: {
		height: 400
	},
	playlistImage: {
		width: '100%',
		height: '100%'
	},
	blur: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	imageOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	playlistInfo: {
		position: 'absolute',
		bottom: 50,
		left: 10,
		padding: 10,
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 4
	},
	infoLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6
	},
	playIcon: {
		marginRight: 10
	},
	playlistName: {
		color: '#fff',
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 10,
		maxWidth: '80%'
	},
	playlistCount: {
		color: '#ddd',
		fontSize: 14,
		marginRight: 10
	},
	playlistViews: {
		color: '#ddd',
		fontSize: 14
	},
	playlistChannel: {
		color: '#ddd',
		fontSize: 14,
		marginTop: 5
	}
})

export default PlaylistPage
