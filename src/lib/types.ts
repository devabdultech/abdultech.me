export interface Metadata {
	title: string;
	day: number;
	month: number;
	year: number;
	description: string;
	readingTime: string;
}

export interface Blog {
	slug: string;
	meta: Metadata;
}

export interface SpotifyData {
	timestamp: number;
	progress_ms: number;
	is_playing: boolean;
	item: {
		album: {
			name: string;
			images: { height: number; url: string; width: number }[];
			external_urls: { spotify: string };
		};
		artists: { name: string; external_urls: { spotify: string } }[];
		external_urls: { spotify: string };
		name: string;
		duration_ms: number;
		preview_url: string;
	};
}
