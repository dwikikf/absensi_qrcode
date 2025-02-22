import { siswas } from '$lib/server/siswas';

export async function load() {
	try {
		const data = await siswas.find({}).toArray();

		// **THE FIX:** Convert _id to string
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
