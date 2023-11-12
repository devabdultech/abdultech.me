import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const template = html`
	<div tw="w-[1200px] h-[630px] flex flex-col items-center justify-center text-center">
  <div
  tw="bg w-full h-full flex"
  style={{
    backgroundImage:
      "linear-gradient(to top right, rgba(24,24,27,.5), rgba(63,63,70,.3))",
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
		height: 630,
		width: 1200
	});
};
