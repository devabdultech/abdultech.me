import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Blog {
	title: string;
	day: number;
	month: string;
	year: string;
	description: string;
	readingTime: string;
	slug: string;
	content: string;
}

export function fetchMarkdownFiles(): Blog[] {
	const markdownDir = path.join(process.cwd(), 'src/blog');
	const filenames = fs.readdirSync(markdownDir);

	const markdownData = filenames
		.filter((filename) => filename.endsWith('.md'))
		.map((filename) => {
			const filePath = path.join(markdownDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);
			return {
				title: data.title,
				day: data.day,
				description: content,
				readingTime: data.readingTime,
				content,
				slug: filename.replace('.md', ''),
				month: data.month,
				year: data.year
			};
		});

	return markdownData;
}
