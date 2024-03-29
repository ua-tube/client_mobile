import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SmallVideosList from '@/components/video/small-videos-list'
import { defaultChannel, playlists, videos } from '@/data'
import PlaylistsList from '@/components/playlists-list'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const UserPage: React.FC = () => {
	const [moreDesc, setMoreDesc] = useState(false)
	const user = defaultChannel

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.navigate(`/channel/${user.id}`)}>
					<Image source={{ uri: user?.profileImg }} style={styles.avatar} />
				</TouchableOpacity>
				<Link
					href={`/channel/${user.id}`}
					style={styles.username}
				>
					{user?.nickName}
				</Link>

				<View style={styles.subscribers}>
					<Text style={styles.subscribersCount}>{user?.subscribersCount}</Text>
					<Text style={styles.subscribersText}>subscribers</Text>
				</View>

				<Text
					numberOfLines={moreDesc ? undefined : 2}
					style={styles.descriptionText}
					children={user.description}
				/>
				<Text
					style={styles.showMoreButton}
					onPress={() => setMoreDesc(p => !p)}
				>
					{moreDesc ? 'Hide' : 'Show more...'}
				</Text>
			</View>

			<TouchableOpacity
				onPress={() => router.replace('/login')}
				style={styles.logOutButt}
			>
				<Text style={styles.logOutButtText}>Exit from account</Text>
			</TouchableOpacity>

			<SmallVideosList videos={videos.slice(0, 7)} title="History" />
			<PlaylistsList playlists={playlists} title="My playlists" />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},
	header: {
		alignItems: 'center',
		gap: 4,
		padding: 20,
		borderRadius: 10,
		backgroundColor: '#444',
		margin: 20
	},
	logOutButt: {
		padding: 20,
		borderRadius: 20,
		backgroundColor: '#444',
		alignItems: 'center',
		margin: 20
	},
	logOutButtText: {
		color: '#fff'
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	username: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10
	},
	description: {
		color: '#ddd',
		fontSize: 16,
		marginTop: 5
	},
	subscribers: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	},
	subscribersCount: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold'
	},
	subscribersText: {
		color: '#ddd',
		fontSize: 14,
		marginLeft: 5
	},
	descriptionText: {
		color: '#fff',
		fontSize: 16
	},
	showMoreButton: {
		color: '#ccc',
		padding: 4,
		backgroundColor: '#333',
		fontWeight: 'bold',
		textAlign: 'right'
	}
})

export default UserPage
