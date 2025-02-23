// @ts-nocheck
import { MONGODB_URI } from '$env/static/private';
import mongoose from 'mongoose';

let cached = null;

const connectDB = async () => {
	if (cached) {
		return cached;
	}

	try {
		cached = await mongoose.connect(MONGODB_URI);
		console.log('Terhubung ke MongoDB');
		return cached;
	} catch (error) {
		console.error('Gagal terhubung ke MongoDB:', error);
		cached = null; // Reset cached jika koneksi gagal
		throw error;
	}
};

export default connectDB;
