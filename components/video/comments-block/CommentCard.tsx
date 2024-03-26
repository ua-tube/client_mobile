import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React, { useMemo, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { IComment } from '@/interfaces'
import { defaultChannel } from '@/data'
import { Image } from 'expo-image'
import { Link } from 'expo-router'


interface IVideoCommentsCardProps {
	comment: IComment
	hasParent?: boolean
}

interface ICommentState extends IComment {
	isLiked: boolean
	isDisliked: boolean
	showReplies: boolean
}

interface IReplyState {
	inputMessage: string
	showInput: boolean
}

const VideoCommentsCard: React.FC<IVideoCommentsCardProps> = ({ comment, hasParent }) => {
	const [commentState, setCommentState] = useState<ICommentState>({
		...comment,
		isDisliked: false,
		isLiked: false,
		showReplies: false
	})
	const [replyState, setReplyState] = useState<IReplyState>({ inputMessage: '', showInput: false })
	const formattedDate = useMemo(() => formatDistanceToNow(comment.createdAt, { addSuffix: true }), [comment.createdAt])


	const onLike = async () => {
		//TODO make action for comment like
		setCommentState(prevState => ({
			...prevState,
			likesCount: Math.abs(prevState.isLiked ? prevState.likesCount - 1 : prevState.likesCount + 1),
			isLiked: !prevState.isLiked,
			isDisliked: false
		}))
	}

	const onDislike = async () => {
		//TODO make action for comment dislike
		setCommentState(prevState => ({
			...prevState,
			likesCount: Math.abs(prevState.isLiked ? prevState.likesCount - 1 : prevState.likesCount),
			isLiked: false,
			isDisliked: !prevState.isDisliked
		}))
	}

	const onSendReply = async () => {
		//TODO make logic for reply action
		setReplyState(p => ({ ...p, showInput: false }))
		const newComment: IComment = {
			children: undefined,
			message: replyState.inputMessage,
			channel: defaultChannel,
			createdAt: new Date().toISOString(),
			likesCount: 0,
			id: Math.random().toString()
		}
		setCommentState(p => ({ ...p, children: p.children ? [...p.children, newComment] : [newComment] }))
	}

	return (
		<View
			style={[styles.commentCard, { marginBottom: !hasParent ? 10 : 0 }]}>
			<View style={styles.commentBlock}>
				<Link href={`/channel/${comment.channel.id}`}>
					<Image
						source={{ uri: comment.channel.profileImg }}
						style={styles.channelImage}
						contentFit="cover"
					/>
				</Link>
				<View style={styles.commentHeader}>
					<Text style={styles.commentAuthor}>{comment.channel.name}</Text>
					<Text style={styles.commentDate}>{formattedDate}</Text>
				</View>
			</View>
			<Text style={styles.commentMessage}>{comment.message}</Text>

			<View style={styles.commentBlock}>
				<TouchableOpacity
					style={[styles.repliesButton, commentState.isLiked && styles.selectedButton]}
					onPress={onLike}>
					<FontAwesome name="heart" style={styles.repliesButtonText} />
					<Text style={styles.repliesButtonText}>{commentState.likesCount}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.repliesButton, commentState.isDisliked && styles.selectedButton]}
					onPress={onDislike}
				>
					<FontAwesome name="heart-o" style={[styles.repliesButtonText, { paddingHorizontal: 4 }]} />
				</TouchableOpacity>
				{!replyState.showInput && <TouchableOpacity
					style={styles.repliesButton}
					onPress={() => setReplyState({ inputMessage: '', showInput: true })}
				>
					<FontAwesome name="mail-forward" style={styles.repliesButtonText} />
					<Text style={styles.repliesButtonText}>Reply</Text>
				</TouchableOpacity>}
				{commentState.children && commentState?.children?.length > 0 && (
					<TouchableOpacity
						style={styles.repliesButton}
						onPress={() => setCommentState(p => ({ ...p, showReplies: !p.showReplies }))}
					>
						<Text style={styles.repliesButtonText}>
							{commentState.showReplies ? 'Hide replies' : `Show ${commentState?.children?.length} replies`}
						</Text>
					</TouchableOpacity>
				)}
			</View>

			{replyState.showInput && <View style={styles.newCommentInput}>
				<TextInput
					value={replyState.inputMessage}
					onChangeText={(inputMessage) => setReplyState({ inputMessage, showInput: true })}
					placeholder="Write a comment..."
					multiline
					style={styles.commentInput}
				/>
				<TouchableOpacity
					style={styles.submitCommentButton}
					disabled={!replyState.inputMessage.trim()}
					onPress={onSendReply}
				>
					<Text style={styles.repliesButtonText}>Reply</Text>
				</TouchableOpacity>
			</View>}

			{commentState.showReplies && commentState.children && <View>
				{commentState.children.map(child => (
					<VideoCommentsCard key={child.id} comment={child} hasParent={true} />
				))}
			</View>}

		</View>
	)
}

const styles = StyleSheet.create({
	commentCard: {
		borderRadius: 5,
		backgroundColor: '#444',
		padding: 10
	},
	newCommentInput: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10
	},
	commentInput: {
		flex: 1,
		borderRadius: 5,
		backgroundColor: '#555',
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
	selectedButton: {
		backgroundColor: '#777'
	},
	channelImage: {
		width: 36,
		height: 36,
		borderRadius: 18
	},
	commentBlock: {
		flexDirection: 'row',
		gap: 10
	},
	commentHeader: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginBottom: 5
	},
	commentAuthor: {
		color: '#fff',
		fontWeight: 'bold'
	},
	commentDate: {
		color: '#ddd'
	},
	commentMessage: {
		color: '#fff'
	},
	repliesButton: {
		borderRadius: 8,
		gap: 10,
		backgroundColor: '#555',
		padding: 6,
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	repliesButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	}

})

export default VideoCommentsCard
