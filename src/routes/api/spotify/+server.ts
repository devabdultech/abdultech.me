import { json } from '@sveltejs/kit';
import { getCurrentlyPlaying } from '$lib/spotify';

export async function GET() {
	try {
		const currentlyPlaying = await getCurrentlyPlaying();

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
