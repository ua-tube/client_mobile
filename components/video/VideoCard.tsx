import { Image, Text, TouchableOpacity, View } from 'react-native'
import { formatNumbers, getChannelUrl, getVideoUrl } from '@/utils'
import { formatDuration, formatTimeAgo } from '@/utils/time.utils'
import { IVideo } from '@/interfaces'
import React, { FC } from 'react'


const VideoCard: FC<IVideo> = ({ duration, id, title, postedAt, thumbnailUrl, channel, views }) => {
	const navigateToVideo = (s: string) => undefined

	return <View style={{ borderRadius: 8, backgroundColor: '#fff', marginBottom: 8 }}>
		<TouchableOpacity onPress={() => navigateToVideo(getVideoUrl(id))}>
			<Image
				source={{ uri: thumbnailUrl }}
				style={{ width: '100%', aspectRatio: 16 / 9, borderRadius: 8 }}
				resizeMode="cover"
			/>
			<View style={{
				position: 'absolute',
				bottom: 8,
				right: 8,
				backgroundColor: 'rgba(0,0,0,0.8)',
				padding: 4,
				borderRadius: 4
			}}>
				<Text style={{ color: '#fff', fontSize: 12 }} children={formatDuration(duration)} />
			</View>
		</TouchableOpacity>

		<View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingTop: 8, maxWidth: '90%' }}>
			<TouchableOpacity onPress={() => navigateToVideo(getChannelUrl(channel.nickName))}>
				<Image
					source={{ uri: channel.profileImg }}
					style={{ width: 36, height: 36, borderRadius: 18 }}
					resizeMode="cover"
				/>
			</TouchableOpacity>
			<View style={{ marginLeft: 8 }}>
				<TouchableOpacity onPress={() => navigateToVideo(getVideoUrl(id))}>
					<Text numberOfLines={2} style={{ fontWeight: 'bold' }}>{title}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigateToVideo(getChannelUrl(channel.nickName))}>
					<Text style={{ color: '#666', fontSize: 12 }}>{channel.name}</Text>
				</TouchableOpacity>
				<Text style={{ color: '#666', fontSize: 12 }}>{formatNumbers(views)} переглядів
					• {formatTimeAgo(postedAt)}</Text>
			</View>
		</View>
	</View>
}

export default VideoCard
