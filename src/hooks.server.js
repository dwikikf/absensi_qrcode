import { start_mongo } from '$lib/server/database';

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((e) => {
		console.error(e);
	});
