import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React, { FC, useState } from 'react'
import { IVideo } from '@/interfaces'
import { Image } from 'expo-image'
import { getVideoUrl } from '@/utils'

interface IAboutVideoProps {
	video?: IVideo
}

const AboutVideo: FC<IAboutVideoProps> = ({ video }) => {
	const [showDesc, setShowDesc] = useState<boolean>(false)
	const [liked, setLiked] = useState<boolean>(false)
	const [disLiked, setDisLiked] = useState<boolean>(false)
	const [subscribed, setSubscribed] = useState<boolean>(false)
	const [openedTypeModal, setOpenedTypeModal] = useState<
		'playlists' |
		'report' |
		undefined
	>()

	const onLike = async () => {
		setLiked(s => !s)
		if (disLiked) setDisLiked(false)
	}

	const onDisLike = async () => {
		setDisLiked(s => !s)
		if (liked) setLiked(false)
	}

	const onSubscribe = async () => {
		setSubscribed(s => !s)
	}

	const onShareLink = async () => {
		try {
			await Share.share({
				title:`Copy video link '${video?.title}'`,
				url: getVideoUrl(video?.id)
			})
		} catch (error) {
			console.error('Error sharing:', error)
		}
	}

	return <View style={styles.videoInfoContainer}>
		<Text style={styles.videoTitle}>{video?.title}</Text>
		<View style={styles.channelInfo}>
			<Image
				source={{ uri: video?.channel.profileImg }}
				style={styles.channelLogo}
			/>
			<View style={styles.channelDetails}>
				<Text style={styles.channelName}>{video?.channel?.name}</Text>
				<Text style={styles.subscriberCount}>
					{(subscribed ? (video?.channel.subscribersCount || 0) + 1 : video?.channel.subscribersCount)?.toLocaleString()} subscribers
				</Text>
			</View>
			<TouchableOpacity style={styles.subscribeButton} onPress={onSubscribe}>
				<Text style={styles.subscribeButtonText}>{subscribed ? 'Unsubscribe' : 'Subscribe'}</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.actionContainer}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<TouchableOpacity style={[styles.button, liked && styles.selectedButton]} onPress={onLike}>
					<FontAwesome name="heart" style={styles.buttonText} />
					<Text style={styles.descriptionButtonText}>Like</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, disLiked && styles.selectedButton]} onPress={onDisLike}>
					<FontAwesome name="heart-o" style={styles.buttonText} />
					<Text style={styles.descriptionButtonText}>Dislike</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={onShareLink}>
					<FontAwesome name="share" style={styles.buttonText} />
					<Text style={styles.descriptionButtonText}>Share</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<FontAwesome name="list" style={styles.buttonText} />
					<Text style={styles.descriptionButtonText}>Save to playlist</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<FontAwesome name="flag" style={styles.buttonText} />
					<Text style={styles.descriptionButtonText}>Report video</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
		<Text {...{ style: styles.videoDescription, ...(!showDesc && { numberOfLines: 2 }) }}>
			{video?.description}
		</Text>
		<TouchableOpacity style={styles.descriptionButton} onPress={() => setShowDesc(p => !p)}>
			<Text
				style={styles.descriptionButtonText}
				children={`${showDesc ? 'Hide' : 'Show'} description`}
			/>
		</TouchableOpacity>
	</View>
}

const styles = StyleSheet.create({
	videoInfoContainer: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#333',
		marginHorizontal: 10,
		marginTop: 10
	},
	channelInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 4
	},
	channelLogo: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10
	},
	channelDetails: {
		flex: 1
	},
	channelName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff'
	},
	subscriberCount: {
		fontSize: 12,
		color: '#ccc',
		marginTop: 2
	},
	subscribeButton: {
		borderRadius: 5,
		backgroundColor: '#555',
		padding: 5,
		marginTop: 5
	},
	subscribeButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	videoTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#fff'
	},
	videoDescription: {
		fontSize: 16,
		marginBottom: 5,
		color: '#ddd'
	},
	descriptionButton: {
		borderRadius: 5,
		backgroundColor: '#444',
		padding: 5,
		marginTop: 10,
		alignSelf: 'flex-start'
	},
	descriptionButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	actionContainer: {
		backgroundColor: '#333',
		paddingVertical: 8
	},
	button: {
		padding: 10,
		marginRight: 8,
		borderRadius: 10,
		backgroundColor: '#444',
		flexDirection: 'row',
		alignItems: 'center'
	},
	selectedButton: {
		backgroundColor: '#5d5d5d'
	},
	buttonText: {
		color: '#fff',
		paddingRight: 10,
		fontWeight: 'bold'
	}
})

export default AboutVideo
