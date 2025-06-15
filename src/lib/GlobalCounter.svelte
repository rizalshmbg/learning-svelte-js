<script>
	import { counter } from '../state/counter.svelte.js';

	function increment() {
		counter.count++;
	}
</script>

<button onclick={increment}>
	Increment Global Counter : {counter.count}
</button>
