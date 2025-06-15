<!-- ALL REACTIVE WITH INCLUDE THE OBJECT -->
<!-- <script>
    let person = $state({
        firstName: '',
        lastName: '',
    })

    function sayHello() {
        person.firstName = document.getElementById('firstName').value
        person.lastName = document.getElementById('lastName').value
    }
</script>

<div>
    <input type="text" id="firstName" placeholder="Input First Name" /> <br>
    <input type="text" id="lastName" placeholder="Input Last Name" /> <br>
    <button onclick={sayHello}>Say Hello</button>

    <h1>Hello {person.firstName} {person.lastName}</h1>
</div> -->

<!-- REACTIVE ONLY THE STATE -->
<script>
	let person = $state.raw({
		firstName: '',
		lastName: '',
	});

	function sayHello() {
		person = {
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
		};
	}
</script>

<div>
	<input type="text" id="firstName" placeholder="Input First Name" /> <br />
	<input type="text" id="lastName" placeholder="Input Last Name" /> <br />
	<button onclick={sayHello}>Say Hello</button>

	<h1>Hello {person.firstName} {person.lastName}</h1>
</div>
