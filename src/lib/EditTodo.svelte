<script>
    const { id, name, done, onedit } = $props();

    function save() {
        const input = document.getElementById(id)
        onedit(id, input.value)
    }
</script>

{id} <input type="text" {id} value={name}>
<button onclick={save}>Save</button>