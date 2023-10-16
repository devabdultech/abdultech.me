import { getCurrentlyPlaying } from '$lib/spotify';

export async function GET() {
	const stream = new ReadableStream({
		async start(controller) {
			const currentlyPlaying = await getCurrentlyPlaying();
			controller.enqueue(JSON.stringify(currentlyPlaying));
			controller.close();
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache'
		}
	});
}
