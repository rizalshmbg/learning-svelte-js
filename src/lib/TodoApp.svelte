<script>
	import EditTodo from './EditTodo.svelte';
	import Todo from './Todo.svelte';

	let data = $state([]);
	let name = $state('');

	let id = 1;

	function add(e) {
		e.preventDefault();

		data.push({
			id: id++,
			name,
			done: false,
		});
		name = '';
	}

	function edit(id) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === id) {
				data[i] = { ...data[i], edit: true };
			}
		}
	}

	function onEdit(id, name) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === id) {
				data[i] = { id, name, edit: false };
			}
		}
	}

	function remove(id) {
		data = data.filter((todo) => todo.id !== id);
	}
</script>

<form>
	<input type="text" id="todo" placeholder="Add Todo" bind:value={name} />
	<button onclick={add}>Add</button>
</form>

<ul>
	{#each data as todo (todo.id)}
		<li>
			{#if todo.edit}
				<EditTodo
					id={todo.id}
					name={todo.name}
					done={todo.done}
					onedit={onEdit}
				/>
			{:else}
				<Todo {...todo} />
				<button onclick={() => edit(todo.id)}>Edit</button>
				<button onclick={() => remove(todo.id)}>Remove</button>
			{/if}
		</li>
	{/each}
</ul>
