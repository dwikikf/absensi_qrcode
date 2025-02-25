<script>
	// @ts-nocheck

	// import feather icon
	import {
		EyeIcon,
		EditIcon,
		XCircleIcon,
		PlusCircleIcon,
		ChevronDownIcon,
		ChevronUpIcon
	} from 'svelte-feather-icons';
	import { preventDefault } from 'svelte/legacy';

	let { data, form } = $props();

	let isInputOpen = $state(true);

	function handleDelete(event) {
		const konfirmasi = confirm('Apakah anda Yakin Akan Menghapus data ini ?');

		if (!konfirmasi) {
			event.preventDefault();
		}
	}
</script>

{#if form?.success}
	<p>
		{form?.message}
	</p>
{/if}

<section class="w-full">
	<div class="my-2 flex justify-between">
		<h2 class="text-2xl font-black">Data Siswa</h2>

		<button class="text-primary" onclick={() => (isInputOpen = !isInputOpen)}>
			{#if isInputOpen}
				<ChevronUpIcon />
			{:else}
				<ChevronDownIcon />
			{/if}
		</button>
	</div>

	{#if isInputOpen}
		<div class="my-4">
			{#if form?.error}
				<p class="text-danger mb-3">{form?.error}</p>
			{/if}
			<form method="POST" action="?/create">
				<label>
					Nis :
					<input
						type="text"
						name="nis"
						id="nis"
						value={form?.nis ?? ''}
						autocomplete="off"
						class="rounded-2xl border-2 bg-gray-200 px-3"
					/>
				</label>
				<label>
					Nama :
					<input
						type="text"
						name="nama"
						id="nama"
						value={form?.nama ?? ''}
						autocomplete="off"
						class=" rounded-2xl border-2 bg-gray-200 px-3"
					/>
				</label>
				<button
					type="submit"
					class="bg-primary cursor-pointer rounded-2xl px-4 py-1 text-sm text-white"
				>
					Tambah Data
				</button>
			</form>
		</div>
	{/if}
	<table class="w-full table-auto border-separate border border-gray-400">
		<thead>
			<tr class="bg-gray-300">
				<th class="border border-gray-300">No</th>
				<th class="border border-gray-300">NISN</th>
				<th class="border border-gray-300">Nama</th>
				<th class="border border-gray-300">Aksi</th>
			</tr>
		</thead>
		<tbody>
			{#if data.siswas.length === 0}
				<tr>
					<td colspan="4" class="text-center">Data tidak ditemukan</td>
				</tr>
			{:else}
				{#each data.siswas as siswa, i}
					<tr>
						<td class="border border-gray-300 text-center">{i + 1}</td>
						<td class="border border-gray-300 text-center">{siswa.nis}</td>
						<td class="border border-gray-300">{siswa.nama}</td>
						<td class="flex items-center justify-evenly gap-1 border border-gray-300">
							<a href="/siswa/{siswa.nis}">
								<EyeIcon class="text-primary" />
							</a>
							<EditIcon />
							<form action="?/delete" method="post">
								<input type="hidden" name="nis" value={siswa.nis} />
								<button class="cursor-pointer" onclick={handleDelete}>
									<XCircleIcon class="text-danger" />
								</button>
							</form>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</section>
