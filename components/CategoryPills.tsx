import React, { FC, useState } from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

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
				style={styles.scrollView}
				children={categories.map((category, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => setSelectedCategory(category)}
						style={[
							styles.button,
							selectedCategory === category ? styles.selectedButton : {}
						]}
					>
						<Text style={styles.buttonText}>{category}</Text>
					</TouchableOpacity>
				))}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E5E5E5',
		paddingVertical: 4,
		borderStyle: 'dashed'
	},
	contentContainer: {
		paddingHorizontal: 16
	},
	scrollView: {
		backgroundColor: '#FFFFFF'
	},
	button: {
		padding: 8,
		marginRight: 8,
		borderRadius: 10,
		backgroundColor: '#CCCCCC'
	},
	selectedButton: {
		backgroundColor: '#555555'
	},
	buttonText: {
		color: '#FFFFFF'
	}
})

export default CategoryPills
