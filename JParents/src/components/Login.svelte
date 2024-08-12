<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Login to your account
				</h1>
				<form class="mx-auto max-w-sm">
					<div class="mb-5">
						<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Your email</label
						>
						<input
							type="email"
							id="email"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-800 focus:ring-primary-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-800 dark:focus:ring-primary-800"
							placeholder="name@flowbite.com"
							required
						/>
					</div>
					<div class="mb-5">
						<label
							for="password"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Your password</label
						>
						<input
							type="password"
							id="password"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-800 focus:ring-primary-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-800 dark:focus:ring-primary-800"
							required
						/>
					</div>
					<div class="mb-5 flex items-start">
						<div class="flex h-5 items-center">
							<input
								id="remember"
								type="checkbox"
								value=""
								class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800"
								required
							/>
						</div>
						<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Remember me</label
						>
					</div>
					<button
						type="submit"
						class="w-full rounded-lg bg-primary-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-800 dark:focus:ring-primary-800 sm:w-auto"
						>Submit</button
					>
               <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Don't have an account? <a href="./registration" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a>
				</form>
			</div>
		</div>
	</div>
</section>
