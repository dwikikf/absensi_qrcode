import { error } from '@sveltejs/kit';
import { BSON } from 'mongodb';

// place files you want to import through the `$lib` alias in this folder.
/**
 * @param {string} id
 */
export function getObjectId(id) {
	try {
		const objectId = new BSON.ObjectId(id);
		return objectId;
	} catch (err) {
		console.error('Parsing string to bson salah pada :', err);

		// @ts-ignore
		if (err.name === 'BSONError') {
			throw error(404, { message: 'Data tidak ditemukan' });
		}
	}
}
