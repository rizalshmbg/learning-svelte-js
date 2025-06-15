<script>
	import UserRow from './UserRow.svelte';

    const user = [
        {
            id: '1',
            name: 'Rizal',
            address: 'Jakarta',
        },
        {
            id: '2',
            name: 'Maulana',
            address: 'Banten',
        },
    ]
</script>

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>

    <tbody>
        {#each user as u}
            <UserRow id={u.id} name={u.name} address={u.address} />
        {/each}
    </tbody>
</table>