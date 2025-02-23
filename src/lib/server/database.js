import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/alhikmah');
		console.log('MongoDB terhubung....');
	} catch (e) {
		console.error('Kesalahan koneksi MongoDB:', e);
	}
};

export default connectDB;
