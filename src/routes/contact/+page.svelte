<script lang="ts">
	import Swal from 'sweetalert2';

	let firstName = '';
	let lastName = '';
	let email = '';
	let phoneNumber = '';
	let details = '';
	let isLoading = false;
	let firstNameError = '';
	let lastNameError = '';
	let emailError = '';
	let phoneNumberError = '';
	let detailsError = '';

	const swalWithButtons = Swal.mixin({
		customClass: {
			confirmButton:
				'bg-cyan-300 shadow-xl text-black px-5 py-1 border-[0.12rem] border-black rounded-md',
			cancelButton:
				'bg-cyan-300 shadow-xl text-black px-5 py-1 border-[0.12rem] border-black rounded-md',
			popup:
				'dark:bg-slate-900 dark:text-gray-400 dark:border-gray-700 border-[0.15rem] border-black'
		},
		background: 'whitesmoke',
		buttonsStyling: false
	});

	function showSuccessPopup() {
		swalWithButtons.fire({
			title: 'Success!',
			text: 'Email sent successfully.',
			icon: 'success',
			confirmButtonText: 'OK'
		});
	}

	function showErrorPopup() {
		swalWithButtons.fire({
			title: 'Error!',
			text: 'Failed to send the email.',
			icon: 'error',
			confirmButtonText: 'OK'
		});
	}

	async function handleSubmit() {
		// Reset previous errors
		firstNameError = '';
		lastNameError = '';
		emailError = '';
		phoneNumberError = '';
		detailsError = '';

		// Validate input fields
		if (firstName.trim() === '') {
			firstNameError = 'First Name is required';
		}

		if (lastName.trim() === '') {
			lastNameError = 'Last Name is required';
		}

		if (email.trim() === '') {
			emailError = 'Email is required';
		} else if (!isValidEmail(email)) {
			emailError = 'Invalid email format';
		}

		if (phoneNumber.trim() === '') {
			phoneNumberError = 'Phone Number is required';
		}

		if (details.trim() === '') {
			detailsError = 'Details are required';
		}

		// If any errors, stop form submission
		if (firstNameError || lastNameError || emailError || phoneNumberError || detailsError) {
			return;
		}

		const formData = {
			access_key: '7b35309b-61fd-4c00-8e38-8dc528737f7d', // Your Web3Forms access key
			firstName,
			lastName,
			email,
			phoneNumber,
			details
		};

		try {
			isLoading = true;
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				isLoading = false;
				// Reset form fields after successful submission
				resetForm();
				showSuccessPopup();
			} else {
				// Handle form submission failure
				console.log(response);
				console.error('Failed to send the email');
				isLoading = false;
				showErrorPopup();
			}
		} catch (error) {
			isLoading = false;
			console.error('Error occurred during form submission:', error);
			showErrorPopup();
		}
	}

	function resetForm() {
		firstName = '';
		lastName = '';
		email = '';
		phoneNumber = '';
		details = '';
	}

	function isValidEmail(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="object-cover w-full text-center py-10 px-4 bg-muted border-b-2 border-black md:py-10 h-[225px]">
	<h1 class="mb-6 text-5xl text-foreground sm:text-6xl">Contact Me</h1>
	<p class="mt-3 text-foreground text-md">
		Let me know if you have any questions or just want to say hi.
	</p>

	<div class="mb-3 text-center">
		<p class="mb-6 text-foreground text-md">I'll get back to you in 1 or 2 days.</p>
	</div>
</div>

<!-- Contact Us -->
<div class="py-8 px-4 mx-auto sm:px-6 lg:px-8 max-w-[150rem]">
	<div class="mx-auto lg:max-w-5xl max-w-[130rem]">
		<div class="items-center mt-3">
			<!-- Card -->
			<div class="flex flex-col p-4 rounded-xl border-black sm:p-6 md:my-16 lg:p-8 lg:py-14 dark:border-gray-700 bg-custom-background card border-[0.15rem]">
				<form on:submit|preventDefault={handleSubmit}>
					<div class="grid gap-4">
						<!-- Grid -->
						<div class="grid grid-cols-1 gap-4 text-foreground sm:grid-cols-2">
							<div>
								<label for="firstName" class="sr-only text-foreground">First Name</label>
								<input
									type="text"
									id="firstName"
									bind:value={firstName}
									class="{firstNameError ? 'error-input' : ''} py-3 px-4 block placeholder:text-foreground w-full border-[0.15rem] bg-muted border-black rounded-md text-foreground text-md focus:border-black focus:ring-black dark:border-gray-700"
									placeholder="First Name"
								/>
								{#if firstNameError}
									<p class="text-sm text-red-500">{firstNameError}</p>
								{/if}
							</div>

							<div>
								<label for="lastName" class="sr-only">Last Name</label>
								<input
									type="text"
									id="lastName"
									bind:value={lastName}
									class="{lastNameError ? 'error-input' : ''} py-3 px-4 block w-full placeholder:text-foreground border-[0.15rem] bg-muted border-black rounded-md text-md focus:border-black focus:ring-black dark:border-gray-700"
									placeholder="Last Name"
								/>
								{#if lastNameError}
									<p class="text-sm text-red-500">{lastNameError}</p>
								{/if}
							</div>
						</div>
						<!-- End Grid -->

						<div>
							<label for="email" class="sr-only">Email</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								autocomplete="email"
								class="{emailError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] placeholder:text-foreground bg-muted border-black rounded-md text-md focus:border-black focus:ring-black dark:border-gray-700"
								placeholder="Email"
							/>
							{#if emailError}
								<p class="text-sm text-red-500">{emailError}</p>
							{/if}
						</div>

						<div>
							<label for="phoneNumber" class="sr-only">Phone Number</label>
							<input
								type="text"
								id="phoneNumber"
								bind:value={phoneNumber}
								class="{phoneNumberError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] bg-muted placeholder:text-foreground border-black rounded-md text-md focus:border-black focus:ring-black dark:border-gray-700"
								placeholder="Phone Number"
							/>
							{#if phoneNumberError}
								<p class="text-sm text-red-500">{phoneNumberError}</p>
							{/if}
						</div>

						<div>
							<label for="details" class="sr-only">Details</label>
							<textarea
								id="details"
								bind:value={details}
								rows="4"
								class="{detailsError ? 'error-input' : ''} py-3 px-4 block w-full bg-muted placeholder:text-foreground border-[0.15rem] border-black rounded-md text-md focus:border-black focus:ring-black dark:border-gray-700"
								placeholder="Details"
							/>
							{#if detailsError}
								<p class="text-sm text-red-500">{detailsError}</p>
							{/if}
						</div>
					</div>
					<!-- End Grid -->

					<div class="grid mt-4">
						<button
							type="submit"
							disabled={isLoading}
							class="inline-flex gap-x-3 justify-center items-center py-3 px-4 text-lg font-medium text-center text-black rounded-lg border-[0.15rem] border-black bg-cyan-300 hover:bg-cyan-200 dark:border-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-500"
						>
							{#if isLoading}
								<div class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
							{:else}
								<span>Send Message</span>
							{/if}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.error-input {
		border-color: red;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.animate-spin {
		border-top-color: black;
		animation: spin 1s linear infinite;
	}
</style>
