import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { IPlaylist, IVideo } from '@/interfaces'
import { playlists, videos } from '@/data'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import { router } from 'expo-router'

type SearchItemType = IPlaylist | IVideo

interface ISearchCardProps {
	item: SearchItemType | any;
}

const SearchResultCard: React.FC<ISearchCardProps> = ({ item }) => {
	const isVideo = !!item?.thumbnailUrl
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() => router.replace(`/${isVideo ? 'video' : 'playlist'}/${item.id}`)}
		>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: isVideo ? item.thumbnailUrl : item.imgUrl }}
					style={styles.image}
				/>
			</View>
			<View style={styles.info}>
				<Text style={styles.title}>{isVideo ? item.title : item.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const SearchPage: React.FC = () => {
	const [searchText, setSearchText] = useState('')
	const [searchResults, setSearchResults] = useState<SearchItemType[]>([])

	const handleSearch = () =>
		setSearchResults([
			...videos.filter((video) => video.title.toLowerCase().includes(searchText.toLowerCase())),
			...playlists.filter((playlist) => playlist.name.toLowerCase().includes(searchText.toLowerCase()))
		].flat())


	return (
		<View style={styles.container}>
			<View style={styles.searchbar}>
				<FontAwesome name="search" size={24} color="#ddd" style={styles.searchIcon} />
				<TextInput
					style={styles.searchInput}
					placeholder="Search for videos, playlists, and channels"
					placeholderTextColor="#ddd"
					onChangeText={setSearchText}
					value={searchText}
					onEndEditing={handleSearch}
				/>
			</View>
			<FlatList
				data={searchResults}
				keyExtractor={(item, index) => index + item.id}
				renderItem={({ item }) => (
					<SearchResultCard item={item} />
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},
	searchbar: {
		height: 50,
		borderRadius: 10,
		backgroundColor: '#444',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchIcon: {
		marginRight: 10
	},
	searchInput: {
		flex: 1,
		color: '#fff',
		fontSize: 16
	},
	card: {
		borderRadius: 10,
		backgroundColor: '#444',
		margin: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageContainer: {
		width: 130,
		height: 75,
		borderRadius: 10,
		marginRight: 10
	},
	image: {
		width: '100%',
		height: '100%'
	},
	info: {
		flex: 1
	},
	title: {
		color: '#fff'
	}
})

export default SearchPage
