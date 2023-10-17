import { getCurrentlyPlaying } from '$lib/spotify';

export async function GET() {
	let intervalId: NodeJS.Timeout;
	const stream = new ReadableStream({
		async start(controller) {
			intervalId = setInterval(async () => {
				try {
					const currentlyPlaying = await getCurrentlyPlaying();
					const data = JSON.stringify(currentlyPlaying);
					controller.enqueue(`data: ${data}\n\n`);
				} catch (error) {
					controller.error(error);
				}
			}, 1000);
		},
		async cancel() {
			clearInterval(intervalId);
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			Connection: 'keep-alive',
			'Cache-Control': 'no-cache'
		}
	});
}
