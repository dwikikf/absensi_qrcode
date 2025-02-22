import { getObjectId } from '$lib';
import { getOneSiswa } from '$lib/server/siswas';

export function load({ params }) {
	const id = getObjectId(params.slug);
	const data = getOneSiswa(id);
	return data;
}
