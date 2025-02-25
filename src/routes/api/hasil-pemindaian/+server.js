import { Absensi } from '$lib/server/models/Absensi.js';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	try {
		const data = await request.json();

		const nis = data.nis;
		const tanggal = data.tanggal;

		console.log(nis);
		console.log(tanggal);

		const hasilAbsen = new Absensi({
			nis,
			tanggal
		});

		const savedHasilAbsen = await hasilAbsen.save();

		return json(
			{
				message: 'Data pemindaian berhasil disimpan',
				data: savedHasilAbsen
			},
			{ status: 201 }
		);
	} catch (error) {
		return json(
			{
				message: 'Gagal menyimpan data pemindaian',
				// @ts-ignore
				error: error.message
			},
			{ status: 400 }
		);
	}
};
