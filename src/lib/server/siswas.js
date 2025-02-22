import db from './database';
import { error } from '@sveltejs/kit';

export const siswas = db.collection('siswas');

export async function getAllSiswa() {
	const data = await siswas.find().toArray();

	const serializedData = data.map(({ _id, nis, nama }) => {
		return {
			nis,
			nama,
			_id: _id.toString() // Convert ObjectId to string
		};
	});

	return { data: serializedData };
}

// @ts-ignore
export async function getOneSiswa(id) {
	const data = await siswas.find({ _id: id }).toArray();

	if (data[0] === undefined) {
		error(404, { message: 'Data tidak ditemukan' });
	}

	const serializedData = data.map(({ _id, nis, nama }) => {
		return {
			nis,
			nama,
			_id: _id.toString() // Convert ObjectId to string
		};
	});

	return { data: serializedData };
}

/**
 * @param {string} nis
 * @param {string} nama
 */
export function create(nis, nama) {
	siswas.insertOne({ nis: nis, nama: nama });
}
