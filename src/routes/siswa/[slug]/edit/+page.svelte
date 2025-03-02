<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	let { data, form } = $props();

	const id = data.siswa.nis;

	const nis = data.siswa.nis;
	const nama = data.siswa.nama;
</script>

{#if form?.error}
	<p class="text-danger mb-3">{form?.error}</p>
{/if}

<form
	method="POST"
	action="?/update"
	use:enhance={() => {
		return ({ result }) => {
			goto(result.data.location);
		};
	}}
>
	<input type="hidden" name="id" value={id} />
	<label>
		Nis :
		<input
			required
			type="text"
			name="nis"
			id="nis"
			value={form?.nis ?? nis}
			autocomplete="off"
			class="rounded-2xl border-2 bg-gray-200 px-3"
		/>
	</label>
	<label>
		Nama :
		<input
			required
			type="text"
			name="nama"
			id="nama"
			value={form?.nama ?? nama}
			autocomplete="off"
			class=" rounded-2xl border-2 bg-gray-200 px-3"
		/>
	</label>
	<button type="submit" class="bg-primary cursor-pointer rounded-2xl px-4 py-1 text-sm text-white">
		Ubah Data
	</button>
</form>
