import { start_mongo } from '$lib/server/db';

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((e) => {
		console.error(e);
	});
