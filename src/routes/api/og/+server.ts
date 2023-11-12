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
	<div tw="w-[1200px] h-[630px] flex flex-col items-center justify-center text-center">
        <div
          tw="bg w-full h-full flex"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #101010, rgba(0, 0, 0, 0.83)), url('/noise.svg'),
			  linear-gradient(#b3fc03 1px, transparent 0), linear-gradient(90deg, #b3fc03 1px, #000 0)",
          }}
        >
          <div tw="flex flex-col text-3xl tracking-tight text-gray-300 w-full items-center h-full justify-center text-center">
            <h1
              tw="text-white text-7xl"
              style={{
                color: "transparent",
                paddingLeft: "12rem",
                paddingRight: "12rem",
                backgroundImage:
                  "linear-gradient(to top, rgba(244, 244,  245, .5), rgba(255,255,255,1))",
                backgroundClip: "text",
              }}
            >
              AbdulTech
            </h1>
            <p tw="mt-4 font-bold">build . ship . live life</p>
          </div>
        </div>
      </div>
	`;

	return new ImageResponse(template, {
		height: 400,
		width: 600
	});
};
