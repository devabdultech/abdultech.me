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
