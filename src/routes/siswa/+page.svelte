<script>
	// import feather icon
	import { EyeIcon, EditIcon, XCircleIcon } from 'svelte-feather-icons';
	//

	let data = $props();

	const siswas = data.data.data;
</script>

<section class="w-full">
	<div class="my-2 flex justify-between">
		<h2 class="text-2xl font-black">Data Siswa</h2>
		<button class="bg-primary rounded-2xl px-4 py-2 text-white">Tambah Data Siswa</button>
	</div>
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
			{#each siswas as { _id, nis, nama }, index}
				<tr>
					<td class="border border-gray-300 text-center">{index + 1}</td>
					<td class="border border-gray-300 text-center">{nis}</td>
					<td class="border border-gray-300">{nama}</td>
					<td class="flex items-center justify-evenly gap-1 border border-gray-300">
						<a href="/siswa/{_id}">
							<EyeIcon class="text-primary" />
						</a>
						<EditIcon />
						<a href="delete">
							<XCircleIcon class="text-danger" />
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
