<script>
    import Logo from "./Logo.svelte";

    const name = 'Svelte';

    const content = '<h2>Hello World!</h2>'
</script>

<style>
    h1 {
        color: red;
    }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
<Logo />
{@html content}
