import { getSiswa } from '$lib/server/models/Siswa';

export async function load() {
	return {
		siswas: await getSiswa()
	};
}
