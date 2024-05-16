import { Navbar } from "./Navbar"

export function PaymentForm() {
	return (
		<>
			<Navbar />
			<div className="flex w-full h-screen justify-center items-center">
				<div className="flex flex-wrap  shadow-lg mx-2 mt-10 md:mx-10 ">
					<div className="w-full rounded overflow-hidden bg-gray-400 md:w-1/2">

						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p className="text-gray-700 text-base">
								<ul>
									<li>fujhbfr</li>
									<li>fujhbfr</li>
									<li>fujhbfr</li>
									<li>fujhbfr</li>
									<li>fujhbfr</li>
								</ul>
							</p>
						</div>
					</div>
					<div className="w-full px-10 py-5 md:w-1/2">
					<form>
					<div className="space-y-12">
						<div>
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
								<div className="sm:col-span-5">
									<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
										First name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-5">
									<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
										Last name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"

											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-5">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
								<button type="button" className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
								</div>
							</div>
						</div>
					</div>
					</form>
					</div>

				</div>
			</div>

			<div>

			</div>
		</>
	)
}