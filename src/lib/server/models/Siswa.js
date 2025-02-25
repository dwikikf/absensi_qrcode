import mongoose from 'mongoose';

const siswaSchema = new mongoose.Schema({
	nis: String,
	nama: String
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
 */
export function deleteOne(nis) {
	return Siswa.deleteOne({ nis: nis });
}
