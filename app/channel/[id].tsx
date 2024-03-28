import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { channelTabsKeys, defaultChannel, playlists, videos } from '@/data'
import SmallVideosList from '@/components/video/small-videos-list'
import PlaylistsList from '@/components/playlists-list'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { TabType } from '@/interfaces'
import { Image } from 'expo-image'

type ChannelTabType = typeof channelTabsKeys[number]

const tabs: TabType<ChannelTabType>[] = [
	{
		key: 'videos',
		title: 'Video',
		children: <SmallVideosList videos={videos} />
	},
	{
		key: 'playlists',
		title: 'Playlists',
		children: <PlaylistsList playlists={playlists} />
	}
]

const channel = defaultChannel

const ChannelPage: React.FC = () => {
	const [moreDesc, setMoreDesc] = useState(false)
	const [currentTab, setCurrentTab] = useState<ChannelTabType>('videos')
	const [subscribed, setSubscribed] = useState<boolean>(false)

	const onSubscribeClick = async () => setSubscribed(s => !s)

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: channel.profileBgImg }} style={styles.backgroundImg} />
			<View style={styles.card}>
				<View style={styles.profile}>
					<Image
						source={{ uri: channel.profileImg }}
						style={styles.profileImg}
					/>
					<View style={styles.info}>
						<Text style={styles.name}>{channel.name}</Text>
						<Text style={styles.subscribersCount}>
							{channel.subscribersCount} subscribers
						</Text>
					</View>
					<TouchableOpacity
						style={styles.subscribeButton}
						onPress={onSubscribeClick}
					>
						<LinearGradient
							start={{ x: 0.2, y: 0.2 }}
							colors={subscribed ?
								['#f52020', '#c600dc'] :
								['#206bf5', '#001ddc']
							}
							style={styles.subscribeButtonGradient}
						>
							<Text style={styles.subscribeButtonText}>
								{subscribed ? 'Unsubscribe' : 'Subscribe'}
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>

			</View>
			<View style={styles.card}>
				<Text
					numberOfLines={moreDesc ? undefined : 2}
					style={styles.descriptionText}
					children={channel.description}
				/>
				<Text
					style={styles.showMoreButton}
					onPress={() => setMoreDesc(p => !p)}
				>
					{moreDesc ? 'Hide' : 'Show more...'}
				</Text>
			</View>
			<View style={[styles.card, styles.tabs]}>
				{tabs.map((value, index) =>
					<TouchableOpacity
						key={index}
						style={[
							styles.tab,
							currentTab === value.key && { backgroundColor: '#555' }]}
						onPress={() => setCurrentTab(value.key)}
					>
						<Text style={styles.descriptionText} children={value.title} />
					</TouchableOpacity>)
				}
			</View>
			{tabs.find(value => value.key === currentTab)?.children}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222'
	},
	backgroundImg: {
		position: 'relative',
		width: '100%',
		height: 140,
		marginBottom: 10
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2
	},
	profileImg: {
		width: 80,
		height: 80,
		borderRadius: 40
	},
	info: {
		marginLeft: 10
	},
	name: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold'
	},
	subscribersCount: {
		color: '#ccc',
		fontSize: 14
	},
	tabs: {
		flexDirection: 'row',
		padding: 10,
		gap: 4
	},
	tab: {
		borderRadius: 5,
		backgroundColor: '#333',
		padding: 10
	},
	descriptionButton: {
		borderRadius: 5,
		backgroundColor: '#555',
		padding: 5,
		marginTop: 10,
		alignSelf: 'flex-start'
	},
	descriptionButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	subscribeButton: {
		height: 60,
		borderRadius: 10,
		padding: 10,
		marginLeft: 10
	},
	subscribeButtonGradient: {
		flex: 1,
		borderRadius: 5,
		padding: 3
	},
	subscribeButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 6
	},
	card: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#444',
		margin: 10
	},
	descriptionText: {
		color: '#fff',
		fontSize: 16
	},
	showMoreButton: {
		color: '#ccc',
		fontWeight: 'bold',
		textAlign: 'right'
	}
})

export default ChannelPage
