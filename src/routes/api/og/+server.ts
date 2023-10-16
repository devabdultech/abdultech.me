import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	let imagePath;

	if (import.meta.env.MODE === 'development') {
		// In development, use the localhost image path
		imagePath = 'http://localhost:5173';
	} else {
		imagePath = 'https://abdultech-me.vercel.app';
	}

	const template = html`
		<div tw="bg-gray-50 flex w-full h-full items-center justify-center">
			<img tw="w-full bg-black" src="${imagePath}/dystopian-world-male-robot-on-computer.png" />
		</div>
	`;

	return new ImageResponse(template, {
		height: 400,
		width: 600
	});
};
