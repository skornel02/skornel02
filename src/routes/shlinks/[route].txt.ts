import type {RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async ({params}) => {
	let shlinkData: string | undefined = undefined;

	const shlinkKey = process.env.SHLINK_KEY;
	if (shlinkKey !== undefined && shlinkKey.length !== 0) {
		try {
			const param = decodeURI(params.route).replaceAll('---', '/');
			const headers = {
				'X-Api-Key': shlinkKey,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			};
			const data = {
				longUrl: `https://skornel02.hu${param}`,
				tags: ['skornel02'],
				findIfExists: true,
				validateUrl: true,
				title: 'skornel02.hu - ' + param,
			};
			const res = await fetch('https://link.skornel02.hu/rest/v2/short-urls', {
				method: 'POST',
				headers,
				body: JSON.stringify(data),
			});
			shlinkData = (await res.json()).shortUrl;
		} catch (e) {
			console.error(e);
		}
	} else {
		console.warn('SHLINK_KEY is not defined');
	}

	return {
		body: shlinkData ?? 'https://link.skornel02.hu/t8I9I',
		status: 200,
	};
};
