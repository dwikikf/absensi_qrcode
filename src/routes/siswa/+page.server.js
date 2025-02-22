import { datasiswas } from './data';

export function load() {
	return {
		summaries: datasiswas.map(({ nis, nama }, index) => ({
			index,
			nis,
			nama
		}))
	};
}
