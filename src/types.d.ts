export interface ITransformedItem {
	title: string;
	link: string;
	description: string;
	imageUrl: string;
	category: string;
	creator: string;
	pubDate: string;
}

export type RSSJson = {
	items: Item[];
};
