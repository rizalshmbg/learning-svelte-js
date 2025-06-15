<script>
	import UserRow from './UserRow.svelte';

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
        <UserRow id='1' name="Rizal" address='Bandung' />
        <UserRow id='2' name="Maulana" address='Banten' />
    </tbody>
</table>