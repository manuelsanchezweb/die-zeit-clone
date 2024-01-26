import type { RequestHandler } from './$types';
import { parseStringPromise } from 'xml2js';

export const GET: RequestHandler = async ({ request, url }) => {
	try {
		const response = await fetch('https://newsfeed.zeit.de/index');
		const rssText = await response.text();
		const rssJson = await parseStringPromise(rssText);

		// Transform the parsed XML to your desired JSON structure
		const items = rssJson.rss.channel[0].item.map((item: any) => {
			let image = '';
			if (item.enclosure && item.enclosure[0] && item.enclosure[0].$ && item.enclosure[0].$.url) {
				image = item.enclosure[0].$.url;
			}

			return {
				title: item.title[0],
				link: item.link[0],
				category: item.category[0],
				imageUrl: image,
				description: item.description[0],
				creator: item['dc:creator'][0],
				pubDate: item.pubDate[0],
				item: item
			};
		});

		return new Response(JSON.stringify({ items }), { status: 200 });
	} catch (error) {
		console.error('Error fetching RSS feed:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch RSS feed' }), { status: 500 });
	}
};
