import Home from '../pages/Home/Home';
import Browse from '../pages/Browse/Browse';
import LikedSongs from '../pages/LikedSongs/LikedSongs';
export const Routes = [
	{
		path: '/',
		component: Home,
		navText: 'Home',
		iconFile: 'home_icon.png'
	},
	{
		path: '/browse',
		component: Browse,
		navText: 'Browse',
		iconFile: 'browse_icon.png'
	},
	{
		path: '/liked-songs',
		component: LikedSongs,
		navText: 'Liked songs',
		iconFile: 'liked_songs_icon.png'
	},
];
