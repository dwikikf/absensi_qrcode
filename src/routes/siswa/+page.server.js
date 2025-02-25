// @ts-nocheck
import { createSiswa, deleteOne, getSiswa } from '$lib/server/models/Siswa';
import { fail } from '@sveltejs/kit';

export async function load() {
	try {
		const siswas = await getSiswa();
		return { siswas };
	} catch (error) {
		console.error('Load Data Siswa Error : ', error);
		return { siswa: [] };
	}
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const nis = data.get('nis');
		const nama = data.get('nama');

		try {
			await createSiswa(nis, nama);

			return {
				success: true,
				message: 'Data siswa berhasil ditambahkan.'
			};
		} catch (error) {
			return fail(422, {
				nis: nis,
				nama: nama,
				error: error.message
			});
		}
	},

	delete: async ({ request }) => {
		const nis = (await request.formData()).get('nis');

		try {
			await deleteOne(nis);
			return {
				success: true,
				message: 'Data siswa berhasil dihapus.'
			};
		} catch (error) {
			console.error('Hapus Data Error :', error);
			return {
				success: false,
				message: 'Terjadi kesalahan saat menambahkan data siswa.'
			};
		}
	}
};
