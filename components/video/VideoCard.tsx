import { formatNumbers, formatTimeAgo } from '@/utils'
import { Image, Text, View } from 'react-native'
import { IVideo } from '@/interfaces'
import React, { FC } from 'react'
import { Link } from 'expo-router'

const VideoCard: FC<IVideo> = ({
	duration,
	id,
	title,
	postedAt,
	thumbnailUrl,
	channel,
	views
}) => {
	const navigateToVideo = (s: string) => undefined

	return (
		<View style={{ borderRadius: 8, backgroundColor: '#fff', marginBottom: 8 }}>
			<Link href={`/video/${id}`}>
				<Image
					source={{ uri: thumbnailUrl }}
					style={{ width: '100%', aspectRatio: 16 / 9, borderRadius: 8 }}
					resizeMode='cover'
				/>
			</Link>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 8,
					paddingTop: 8,
					maxWidth: '90%'
				}}
			>
				<Link href={`/video/${id}`}>
					<Image
						source={{ uri: channel.profileImg }}
						style={{ width: 36, height: 36, borderRadius: 18 }}
						resizeMode='cover'
					/>
				</Link>
				<View style={{ marginLeft: 8, marginBottom: 2 }}>
					<Link href={`/video/${id}`}>
						<Text
							numberOfLines={2}
							style={{ fontWeight: 'bold' }}
							children={title}
						/>
					</Link>
					<Text style={{ color: '#666', fontSize: 12 }}>{channel.name}</Text>
					<Text
						style={{ color: '#666', fontSize: 12 }}
						children={`${formatNumbers(views)} переглядів • ${formatTimeAgo(postedAt)}`}
					/>
				</View>
			</View>
		</View>
	)
}

export default VideoCard
