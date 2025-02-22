import { siswas } from '$lib/server/siswas';
import { BSON } from 'mongodb';

export async function load({ params }) {
	const id = new BSON.ObjectId(params.slug);

	try {
		const data = await siswas.find({ _id: id }).toArray();

		const serializedData = data.map(({ _id, nis, nama }) => {
			return {
				nis,
				nama,
				_id: _id.toString() // Convert ObjectId to string
			};
		});

		return {
			data: serializedData
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			data: [], // Or handle the error as needed
			error: 'Failed to load data' // Optional error message
		};
	}
}
