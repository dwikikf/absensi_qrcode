import { getSiswa, Siswa } from '$lib/server/models/Siswa';

export async function load() {
	try {
		const siswas = await getSiswa();
		return { siswas };
	} catch (error) {
		console.error('Error di load : ', error);
		return { siswa: [] };
	}
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const nis = data.get('nis');
		const nama = data.get('nama');

		try {
			const siswaBaru = new Siswa({
				nis,
				nama
			});

			await siswaBaru.save();

			return {
				success: true,
				message: 'Data siswa berhasil ditambahkan.'
			};
		} catch (error) {
			console.error('Error creating siswa:', error);
			return {
				success: false,
				message: 'Terjadi kesalahan saat menambahkan data siswa.'
			};
		}
	}
};
