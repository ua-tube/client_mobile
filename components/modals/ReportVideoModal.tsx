import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { IReportReason } from '@/interfaces'
import React, { useState } from 'react'
import { reportReasons } from '@/data'


interface IReportVideoModalProps {
	onClose: () => void
	reportVideo: (id: number) => void
	visible: boolean
}

const ReportVideoModal: React.FC<IReportVideoModalProps> = ({ onClose, reportVideo, visible }) => {
	const [selectedReason, setSelectedReason] = useState<IReportReason>(reportReasons?.[0])

	const handleReport = () => {
		if (!selectedReason) return
		reportVideo(selectedReason.id)
		onClose()
	}

	const renderReasons = () => {
		return reportReasons.map((reason) => (
			<TouchableOpacity
				key={reason.id}
				style={[styles.reasonButton, selectedReason?.id === reason.id && styles.selected]}
				onPress={() => setSelectedReason(reason)}
			>
				<Text style={styles.reasonText}>{reason.name}</Text>
			</TouchableOpacity>
		))
	}

	return (
		<Modal animationType="fade" transparent={true} onRequestClose={onClose} visible={visible}>
			<View style={styles.container}>
				<View style={styles.modal}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Video report</Text>
						<TouchableOpacity
							onPress={onClose}
							style={styles.closeButton}>
							<FontAwesome
								name="close"
								style={styles.closeButtText}
							/>
						</TouchableOpacity>

					</View>
					<Text style={styles.description}>Choose report reason:</Text>
					{renderReasons()}
					<TouchableOpacity style={styles.button} onPress={handleReport}>
						<Text style={styles.buttonText}>Report</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	modal: {
		backgroundColor: '#333',
		borderRadius: 10,
		padding: 20,
		width: '90%',
		maxWidth: 400
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},
	closeButton: {
		borderRadius: 5,
		padding: 5,
		backgroundColor: '#444',
		borderStyle: 'solid',
		borderColor: '#222'
	},
	closeButtText: {
		color: '#fff',
		fontSize: 20
	},
	description: {
		color: '#ddd',
		fontSize: 16,
		marginBottom: 10
	},
	reasonButton: {
		borderRadius: 10,
		backgroundColor: '#444',
		padding: 10,
		marginBottom: 10
	},
	selected: {
		backgroundColor: '#666'
	},
	reasonText: {
		color: '#fff',
		fontSize: 16
	},
	button: {
		borderRadius: 10,
		backgroundColor: '#5d0000',
		padding: 10,
		marginTop: 10
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold'
	}
})

export default ReportVideoModal
