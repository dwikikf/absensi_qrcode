// @ts-nocheck
import connectDB from '$lib/server/database';

export async function handle({ event, resolve }) {
	try {
		await connectDB(); // Panggil connectDB di sini
	} catch (error) {
		// Tangani error koneksi jika diperlukan
		console.error('Gagal terhubung ke database:', error);
		// Mungkin kirim response error atau tampilkan pesan kesalahan
		return new Response('Terjadi kesalahan server', { status: 500 });
	}
	const response = await resolve(event);
	return response;
}
