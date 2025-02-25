import mongoose from 'mongoose';

const absensiSchema = new mongoose.Schema({
	nis: String,
	tanggal: Date
});

export const Absensi = mongoose.models.Absensi || mongoose.model('Absensi', absensiSchema);
