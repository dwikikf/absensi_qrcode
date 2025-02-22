import { create, getAllSiswa } from '$lib/server/siswas';

export async function load() {
	const data = await getAllSiswa();
	return { data: data.data };
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		// @ts-ignore
		create(data.get('nis'), data.get('nama'));
	}
};
