<script>
	import Todo from './Todo.svelte';
</script>

<ul>
	<li>
		<Todo id="1" name="Rizal" done={true} />
	</li>
	<li>
		<Todo id="2" name="Imam" done={true} />
	</li>
	<li>
		<Todo id="3" name="Asep" done={false} />
	</li>
	<li>
		<Todo id="4" name="Ahlam" done={true} />
	</li>
</ul>
