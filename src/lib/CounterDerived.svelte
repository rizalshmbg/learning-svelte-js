<!-- DERIVED -->
<!-- <script>
    let count = $state([]);
    let total  = $derived(count.reduce((acc, val) => acc + val, 0));

    function increment() {
        count.push(1);
    }
</script>

<h1>{count.join(" + ")} = {total}</h1>
<button onclick={increment}>Increment</button> -->

<!-- DERIVED BY -->
<script>
    let count = $state([]);
    let total = $derived.by(() => {
        let total = 0;
        for (let i = 0; i < count.length; i++) {
            total += count[i];
        }
        return total;
    })


    function increment() {
        count.push(1);
    }

    console.log(count) // CANNOT
    $inspect(count).with((type, values) => {
        console.log(type, values)
    })
</script>

<h1>{count.join(" + ")} = {total}</h1>
<button onclick={increment}>Increment</button>