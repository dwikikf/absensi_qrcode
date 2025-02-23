<script>
	// @ts-nocheck

	// import feather icon
	import { EyeIcon, EditIcon, XCircleIcon } from 'svelte-feather-icons';

	export let data;
</script>

<section class="w-full">
	<div class="my-2 flex justify-between">
		<h2 class="text-2xl font-black">Data Siswa</h2>

		<form method="POST" action="?/create">
			<label>
				Nis :
				<input
					name="nis"
					autocomplete="off"
					class="rounded-2xl border-2 bg-gray-200 px-3"
					required
				/>
			</label>
			<label>
				Nama :
				<input
					name="nama"
					autocomplete="off"
					class=" rounded-2xl border-2 bg-gray-200 px-3"
					required
				/>
			</label>
			<button type="submit" class="bg-primary cursor-pointer rounded-2xl px-4 py-2 text-white">
				Tambah Data Siswa
			</button>
		</form>
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
			<!-- {#if data.data.data.length === 0}
				<tr>
					<td colspan="4" class="text-center">Data tidak ditemukan</td>
				</tr>
			{/if}
	-->
			{#each data.siswas as siswa, i}
				<tr>
					<td class="border border-gray-300 text-center">{i + 1}</td>
					<td class="border border-gray-300 text-center">{siswa.nis}</td>
					<td class="border border-gray-300">{siswa.nama}</td>
					<td class="flex items-center justify-evenly gap-1 border border-gray-300">
						<a href="/siswa/{siswa.nis}}">
							<EyeIcon class="text-primary" />
						</a>
						<EditIcon />
						<button>
							<XCircleIcon class="text-danger" />
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
