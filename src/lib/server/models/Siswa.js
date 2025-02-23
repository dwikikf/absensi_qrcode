import mongoose from 'mongoose';

const siswaSchema = new mongoose.Schema({
	nis: String,
	name: String
});

export const Siswa = mongoose.models.Siswa || mongoose.model('Siswa', siswaSchema);

export function getSiswa() {
	return Siswa.find({}, { _id: 0 }).lean();
}
