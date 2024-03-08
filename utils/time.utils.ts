import { formatDistanceStrict } from 'date-fns'

const LEADING_ZERO_FORMATTER = new Intl.NumberFormat('en-US', {
	minimumIntegerDigits: 2,
	compactDisplay: 'short'
})

export function formatDuration(duration: number) {
	const hours = Math.floor(duration / 60 / 60)
	const minutes = Math.floor((duration - hours * 60 * 60) / 60)
	const seconds = duration % 60

	if (hours > 0)
		return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds).split(',')[0]}`

	return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds).split(',')[0]}`
}


export const formatTimeAgo = (stringDate: string) =>
	formatDistanceStrict(new Date(stringDate), new Date(), { addSuffix: true })

