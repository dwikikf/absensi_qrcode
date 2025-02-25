import { getOnesiswa } from '$lib/server/models/Siswa.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const siswa = await getOnesiswa(params.slug);

	if (!siswa) {
		error(404, { message: 'Data tidak ditemukan.' });
	}

	return { siswa };
}
