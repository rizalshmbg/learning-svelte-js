<script>
	const { id, name, done } = $props();

	const emojis = {
		"1": "👍",
		"2": "👎",
		"3": "🤷",
		"4": "🤔",
		"5": "🎉",
		"6": "🚀",
	}

	const emoji = emojis[id]
	console.log(emoji)
</script>

{emoji}

{#if done}
<strike>{id} - {name}</strike>
{:else}
{id} - {name}
{/if}
