import { sveltekit } from '@sveltejs/kit/vite';
import type {  ViteDevServer } from 'vite'
import { defineConfig } from 'vitest/config';

import { Server } from 'socket.io';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.on('connection', (socket) => {
			socket.emit('eventFromServer', 'Hello, World 👋')
		})
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	assetsInclude: ['static/**/*.{svg,cur,pdf}']
});
