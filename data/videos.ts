import { defaultChannel, defaultVideo, qualities } from './video'
import { IVideo } from '@/interfaces'

const videoEdits: IVideo[] = [
	{
		id: '1b5a68680b00c658dc3dec16b5a27f0e',
		title: 'ANAKIN SKYWALKER | Can\'t Relate (edit) [Revenge Of The Sith]',
		views: 888000,
		postedAt: '2023-09-29',
		duration: 2586,
		qualities,
		description: defaultVideo.description,
		visible: 0,
		likesCount: 543,
		disLikesCount: 4,
		limits: true,
		thumbnailUrl: 'https://i.ytimg.com/vi/5txddNLV650/hqdefault.jpg',
		channel: defaultChannel
	},
	{
		id: '6354c215a3c641a37ca7e4759da038ee',
		title: 'Sia - Unstoppable (Official Audio)',
		views: 172464814,
		postedAt: '2016-1-21',
		duration: 217,
		qualities,
		visible: 1,
		likesCount: 5423,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/cxjvTXo9WWM/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: 'f0e00bb2a86ff1cec67016b787634610',
		title: 'Marvel Studios\' Avengers: Endgame - Official Trailer',
		views: 103400000,
		postedAt: '2020-03-03',
		duration: 126,
		qualities,
		visible: 1,
		likesCount: 5423,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: '9e040a7a6ef9df150ae9b5e3edf9429d',
		title: 'Learn React From Scratch in 1 hour',
		views: 1032330,
		postedAt: '2023-08-09',
		duration: 2781,
		qualities,
		visible: 1,
		likesCount: 54423,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/c8-eYB--j-Q/maxresdefault.jpg',
		channel:defaultChannel
	},
	{
		id: '3f7f8b78d7089f21d07331edce7fd0eb',
		title: 'Beautiful Scroll Animations | Animate on Scroll',
		views: 20323,
		postedAt: '2023-10-17',
		duration: 643,
		qualities,
		visible: 2,
		likesCount: 5423,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/UYSylqXW9vM/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: 'c417f3030e21e55c9013f4591035b795',
		title: 'Peaky Blinders Season 6 Official Trailer | Netflix India',
		views: 5323,
		postedAt: '2023-8-17',
		duration: 93,
		qualities,
		visible: 1,
		likesCount: 3,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/PxZ5gGfPtCQ/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: '116281ab79cd0184d31c17b60e171bed',
		title: 'Learn useState Hook in React JS | React Hooks Explained',
		views: 30323,
		postedAt: '2023-9-17',
		duration: 990,
		qualities,
		visible: 1,
		likesCount: 344,
		disLikesCount: 34,
		limits: false,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/z_MnNejwR8s/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: 'f8007334bcecc56b8ccdfce585f8ac53',
		title: 'Jujutsu Kaisen - Neon Blade [Edit/AMV]',
		views: 8323,
		postedAt: '2023-11-15',
		duration: 1113,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i.ytimg.com/vi/HoxrYzuxH_Q/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: 'd6fe8454efd2c8253ead6ab79d34dddb',
		title: 'How to get ahead of 99% of people',
		views: 777777,
		postedAt: '2023-9-08',
		duration: 1117,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/p_0MaEUBMYg/maxresdefault.jpg',
		channel: defaultChannel
	},
	{
		id: '361f18312f24eac5bf69f78189037d60',
		title: 'THE BATMAN – Main Trailer',
		views: 60000000,
		postedAt: '2021-11-02',
		duration: 1000,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/mqqft2x_Aa4/maxresdefault.jpg',
		channel: defaultChannel
	}
]

const musicVideos: IVideo[] = [
	{
		id: 'dcfc673a421aa70e1ab78fda3b435d33',
		title: 'Hidden Details in Loki\'s Costumes! | Behind the Scenes',
		views: 20323340,
		postedAt: '2023-11-17',
		duration: 307,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/mS9nfsA-oGI/maxresdefault.jpg',
		channel: {
			name: 'Marvel Entertainment',
			id: 'Marvel Entertainment',
			profileImg: 'https://i.pinimg.com/564x/16/4d/f5/164df5e3f7a4b8b1736c3381acd32a0a.jpg',
			nickName: 'marvel'
		}
	},
	{
		id: '85f080ed49cc2d52a1a4d1d252955e1d',
		title: 'Infinite Scrolling Animation CSS Only',
		views: 257136,
		postedAt: '2023-11-14',
		duration: 732,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i.ytimg.com/vi/3uLklfZ5Xd4/hqdefault.jpg',
		channel: {
			name: 'constGenius',
			id: 'constGenius',
			profileImg: 'https://i.pinimg.com/564x/16/4d/f5/164df5e3f7a4b8b1736c3381acd32a0a.jpg',
			nickName: 'constGenius'
		}
	},
	{
		id: '5d9d5bfa615733d9606ebc05e0df138b',
		title: 'Setup Tailwind CSS with React JS | Added Tips to use it easily',
		views: 20323,
		postedAt: '2023-9-21',
		duration: 256,
		qualities,
		visible: 2,
		likesCount: 32,
		disLikesCount: 34,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i3.ytimg.com/vi/JtEZjrfx3oM/maxresdefault.jpg',
		channel: {
			name: 'constGenius',
			id: 'constGenius',
			nickName: 'constGenius',
			profileImg: 'https://i.pinimg.com/564x/16/4d/f5/164df5e3f7a4b8b1736c3381acd32a0a.jpg'
		}
	},
	{
		id: '4ebb14778268174704fffbead1a6c470',
		title: 'Soaked- Shy smith (edited audio, best part, tik tok)',
		views: 16014,
		postedAt: '2023-12-31',
		duration: 256,
		qualities,
		visible: 2,
		likesCount: 592,
		disLikesCount: 77,
		limits: true,
		description: defaultVideo.description,
		thumbnailUrl: 'https://i.ytimg.com/vi/EYoidZubQi8/hqdefault.jpg',
		channel: {
			name: 'sereia',
			id: 'sereia',
			nickName: 'sereia',
			profileImg: 'https://i.pinimg.com/564x/16/4d/f5/164df5e3f7a4b8b1736c3381acd32a0a.jpg'
		}
	}
]

const videos: IVideo[] = [...videoEdits, ...musicVideos]

export { videos, musicVideos, videoEdits }
