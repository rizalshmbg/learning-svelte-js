<script>
	import Todo from './Todo.svelte';

	const data = $state([
		{ id: 1, name: 'Belajar HTML', done: true },
		{ id: 2, name: 'Belajar CSS', done: true },
		{ id: 3, name: 'Belajar React', done: true },
		{ id: 4, name: 'Belajar Next', done: false },
		{ id: 5, name: 'Belajar Svelte', done: true },
		{ id: 6, name: 'Belajar Nuxt', done: false },
	]);

	function remove() {
		data.shift();
	}
</script>

<button onclick={remove}>Remove</button>

<ul>
	{#each data as todo (todo.id)}
		<li>
			<Todo {...todo} />
		</li>
	{/each}
</ul>
