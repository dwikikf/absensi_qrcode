import mongoose from 'mongoose';

const siswaSchema = new mongoose.Schema({
	nis: {
		type: String,
		required: true,
		unique: true
	},
	nama: {
		type: String,
		required: true
	}
});

export const Siswa = mongoose.models.Siswa || mongoose.model('Siswa', siswaSchema);

export function getSiswa() {
	return Siswa.find({}, { _id: 0 }).lean();
}

/**
 * @param {string} nis
 */
export function getOnesiswa(nis) {
	return Siswa.findOne({ nis: nis }, { _id: 0 }).lean();
}

/**
 * @param {string} nis
 * @param {string} nama
 */
export async function createSiswa(nis, nama) {
	if (nis === '') {
		throw new Error('Kolom nis siswa harus diisi.');
	}

	if (nama === '') {
		throw new Error('Kolom nama siswa harus diisi.');
	}

	const siswa = await Siswa.findOne({ nis });

	if (siswa) {
		throw new Error('Nis Sudah Terdaftar.');
	}

	const siswaBaru = new Siswa({
		nis,
		nama
	});

	return siswaBaru.save();
}

/**
 * @param {string} nis
 */
export function deleteOne(nis) {
	return Siswa.deleteOne({ nis: nis });
}
