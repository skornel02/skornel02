import {build, files, prerendered, version} from '$service-worker';
import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching';

console.log('Hello from service-worker.js', {build, files, prerendered, version});

const urls = [...files, ...prerendered, ...build]
	.filter((file) => !file.endsWith('.jpeg') && !file.endsWith('.png') && !file.endsWith('.pdf'))
	.filter((file) => !file.startsWith('/.'));

console.log('Service worker urls: ', urls);

precacheAndRoute(
	urls.map((file) => ({
		url: file,
		revision: version,
	})),
	{
		cleanURLs: false,
	}
);

cleanupOutdatedCaches();

self.addEventListener('install', () => {
	self.skipWaiting();
});
