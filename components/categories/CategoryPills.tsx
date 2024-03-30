import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'

interface ICategoryPillsProps {
	categories: string[]
}

const CategoryPills: FC<ICategoryPillsProps> = ({ categories }) => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0]
	)

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
			>
				{categories.map((category, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => setSelectedCategory(category)}
						style={[styles.button, selectedCategory === category && styles.selectedButton]}
					>
						<Text style={styles.buttonText}>{category}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		paddingVertical: 4,
	},
	contentContainer: {
		paddingHorizontal: 16,
	},
	button: {
		padding: 8,
		marginRight: 8,
		borderRadius: 8,
		backgroundColor: '#444',
	},
	selectedButton: {
		backgroundColor: '#555',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
})

export default CategoryPills
