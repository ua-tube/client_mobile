import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IComment } from '@/interfaces'
import CommentCard from './CommentCard'
import { defaultChannel } from '@/data'

interface ICommentsBlockProps {
	comments: IComment[]
}

const CommentsBlock: React.FC<ICommentsBlockProps> = ({ comments }) => {
	const [showAllComments, setShowAllComments] = useState(false)
	const [newComment, setNewComment] = useState<string>('')
	const [allComments, setAllComments] = useState<IComment[]>(comments)


	const handleSubmitComment = () => {
		if (!newComment.trim()) return
		//TODO make logic for send review
		const newCommentObj: IComment = {
			children: undefined,
			message: newComment,
			channel: defaultChannel,
			createdAt: new Date().toISOString(),
			likesCount: 0,
			id: Math.random().toString()
		}
		setAllComments(p => [...p, newCommentObj])
		setNewComment('')
	}

	return (
		<View style={styles.commentsBlock}>
			<Text style={styles.blockTitle}>Comments</Text>
			<View style={styles.newCommentInput}>
				<TextInput
					value={newComment}
					onChangeText={setNewComment}
					placeholder="Write a comment..."
					multiline
					numberOfLines={4}
					style={styles.commentInput}
				/>
				<TouchableOpacity
					style={styles.submitCommentButton}
					disabled={!newComment.trim()}
					onPress={handleSubmitComment}
				>
					<Text style={styles.submitCommentButtonText}>Reply</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				nestedScrollEnabled
				data={allComments.slice(0, showAllComments ? allComments.length : 3)}
				keyExtractor={item => item.id}
				style={{ flexDirection: 'column', gap: 20 }}
				renderItem={({ item }) =>
					<CommentCard key={item.id} comment={item} />}
			/>
			{allComments.length > 3 && !showAllComments && (
				<TouchableOpacity
					style={styles.showAllCommentsButton}
					onPress={() => setShowAllComments(true)}
				>
					<Text style={styles.showAllCommentsButtonText}>
						Show all comments
					</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	commentsBlock: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#333',
		margin: 10
	},
	blockTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff'
	},
	newCommentInput: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10
	},
	commentInput: {
		flex: 1,
		borderRadius: 5,
		backgroundColor: '#444',
		padding: 10,
		color: '#fff',
		fontSize: 16
	},
	submitCommentButton: {
		borderRadius: 5,
		backgroundColor: '#555',
		padding: 10,
		marginLeft: 10
	},
	submitCommentButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	showAllCommentsButton: {
		borderRadius: 5,
		backgroundColor: '#555',
		padding: 5,
		marginTop: 10,
		alignSelf: 'center'
	},
	showAllCommentsButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	}
})

export default CommentsBlock
