import { json } from '@sveltejs/kit';
import { getCurrentlyPlaying } from '$lib/spotify';
import type { SpotifyData } from '$lib/types';

export async function GET() {
	try {
		const currentlyPlaying: SpotifyData = await getCurrentlyPlaying();

		return json({
			isPlaying: true,
			data: currentlyPlaying
		});
	} catch (error) {
		return json({
			isPlaying: false,
			error:
				'Failed to retrieve data from Spotify API. The user is not currently listening to anything.'
		});
	}
}
