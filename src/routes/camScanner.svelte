<script>
	// @ts-nocheck

	import { BrowserQRCodeReader, NotFoundException } from '@zxing/library';

	let video;
	let result = '';
	let isScanning = false;

	async function simpanData(dataPemindaian) {
		try {
			const response = await fetch('/api/hasil-pemindaian', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},

				body: JSON.stringify({
					nis: dataPemindaian,
					tanggal: new Date()
				})
			});

			const resultSimpan = await response.json();

			if (response.ok) {
				console.log('Data pemindaian berhasil disimpan:', resultSimpan.data);
				alert(resultSimpan.message);
				result = '';
			} else {
				console.error('Gagal menyimpan data pemindaian:', resultSimpan.error);
				alert(resultSimpan.message);
			}
		} catch (error) {
			console.error('Error:', error);
			alert('Terjadi kesalahan jaringan.');
		}
	}

	function handleScanning() {
		isScanning = !isScanning;
		result = '';

		const codeReader = new BrowserQRCodeReader();

		if (isScanning) {
			codeReader
				.getVideoInputDevices()
				.then((videoInputDevices) => {
					const selectedDeviceId = videoInputDevices[0].deviceId;

					codeReader.decodeFromVideoDevice(selectedDeviceId, video, (res, err) => {
						if (res) {
							result = res.text;
							simpanData(result);
							// codeReader.reset(); // stop scanning after found a qr code.
						}
						// if (err && !(err instanceof NotFoundException)) {
						// 	console.error(err);
						// }
					});
				})
				.catch((err) => console.error(err));
		} else {
			codeReader.reset();
		}
	}
</script>

<div>
	<button
		class="bg-primary mb-2 cursor-pointer rounded-2xl px-4 py-1 text-white"
		onclick={handleScanning}>{isScanning ? 'Selesai Scanning' : 'Mulai Scanning'}</button
	>

	{#if isScanning}
		<video bind:this={video} width="300" height="200">
			<track kind="captions" />
		</video>
	{/if}
	{#if result}
		<p>Absensi NIS: {result}</p>
	{/if}
</div>
