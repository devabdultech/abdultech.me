import { PUBLIC_CLIENT_ID, PUBLIC_CLIENT_SECRET, PUBLIC_REFRESH_TOKEN } from '$env/static/public';
import type { SpotifyData } from './types';

const client_id = PUBLIC_CLIENT_ID;
const client_secret = PUBLIC_CLIENT_SECRET;
const refresh_token = PUBLIC_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token
		}).toString()
	});

	return response.json();
};

export const getCurrentlyPlaying = async () => {
	const { access_token } = await getAccessToken();

	const response = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});

	if (response.ok) {
		return response.json() as Promise<SpotifyData>;
	} else {
		throw new Error(`Failed to fetch data from Spotify API: ${response.status}`);
	}
};
