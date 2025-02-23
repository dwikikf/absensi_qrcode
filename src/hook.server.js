// @ts-nocheck
import connectDB from '$lib/server/database';

export const handle = async ({ event, resolve }) => {
	await connectDB();
	const response = await resolve(event);
	return response;
};
