import { IChannel, IVideo } from './'

interface IPlaylist {
	id: string,
	name: string,
	imgUrl?: string // first video thumbnail
	channel?: IChannel
	videos?: IVideo[]
	viewsCount?:number
	videosCount?: number
	isPrivate?: boolean
	createdAt?: string
	updatedAt?: string
}

export type { IPlaylist }
