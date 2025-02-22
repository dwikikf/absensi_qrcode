<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="@container">
	<nav>
		<ul class="flex gap-4">
			<li><a href="/" aria-label="home" class="underline">Home</a></li>
			<li><a href="/siswa" aria-label="siswa" class="underline">Data Siswa</a></li>
		</ul>
	</nav>
	<!-- this is content -->
	<div class="m-4">
		{@render children()}
	</div>
</div>
