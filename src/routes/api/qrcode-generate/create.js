import fs from 'fs';
// import path from 'path';
import fetch from 'node-fetch';

/**
 * @param {string} nis
 */
export async function createQr(nis) {
	try {
		const response = await fetch(
			'https://api.qr-code-generator.com/v1/create?access-token=VoHjvg2oQyHXLpjir8JDayatr194vbscYNRFVup3c_T9OtdNmfqvpQpr8p6leBps',
			{
				method: 'POST',
				body: {
					// @ts-ignore
					frame_name: 'no-frame',
					qr_code_text: nis,
					image_format: 'SVG',
					qr_code_logo: 'scan-me-square'
				}
			}
		);

		console.log(response);

		const buffer = Buffer.from(await response.arrayBuffer());

		console.log(buffer);

		if (buffer) {
			const save = fs.writeFile('./static/image.svg', buffer, (err) => {
				if (err) {
					console.error(err);
				} else {
					console.log(save);
					return save;
				}
			});
		}
	} catch (error) {
		console.log('kesalahan : ', error);
	}
}
