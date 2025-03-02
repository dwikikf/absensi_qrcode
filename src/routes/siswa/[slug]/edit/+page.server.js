import { getOnesiswa, updateSiswa } from '$lib/server/models/Siswa.js';
import { error, fail } from '@sveltejs/kit';

export async function load({ params }) {
	const siswa = await getOnesiswa(params.slug);

	if (!siswa) {
		error(404, { message: 'Data tidak ditemukan.' });
	}

	return { siswa };
}

export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const nis = data.get('nis');
		const nama = data.get('nama');

		try {
			// @ts-ignore
			await updateSiswa(id, nis, nama);

			return { type: 'redirect', status: 303, location: '/siswa' };
		} catch (error) {
			return fail(422, {
				nis: nis,
				nama: nama,
				// @ts-ignore
				error: error.message
			});
		}
	}
};
