

export default function RegFormTwo({fathers_name, mothers_name,fathers_phone,mothers_phone, updateField}) {
  return (
    <>
      <div className="space-y-12">
        <div className="pb-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Guardian Details</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                Father's Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fathers_name"
                  required
                  id="fathers_name"
                  value={fathers_name}
                  onChange={e=> updateField({fathers_name:e.target.value})}
                  autoComplete="fathers_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="fathers_phone" className="block text-sm font-medium leading-6 text-gray-900">
                Father's Phone no.
              </label>
              <div className="mt-2">
                <input
                  id="fathers_phone"
                  name="fathers_phone"
                  required
                  type="text"
                  value={fathers_phone}
                  onChange={e=> updateField({fathers_phone:e.target.value})}
                  autoComplete="fathers_phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="mothers_name" className="block text-sm font-medium leading-6 text-gray-900">
                Mother's Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mothers_name"
                  required
                  id="mothers_name"
                  value={mothers_name}
                  onChange={e=> updateField({mothers_name:e.target.value})}
                  autoComplete="mothers_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
            <div className="sm:col-span-3">
              <label htmlFor="mothers_phone" className="block text-sm font-medium leading-6 text-gray-900">
                Mother's Phone no.
              </label>
              <div className="mt-2">
                <input
                  id="mothers_phone"
                  name="mothers_phone"
                  type="text"
                  required
                  value={mothers_phone}
                  onChange={e=> updateField({mothers_phone:e.target.value})}
                  autoComplete="mothers_phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
