import { useState } from "react"
import avatar from "../user.png"

export default function RegFormOne({ name, email, phone, password, nid, school, profile,current_class, division, reference, dob, updateField, classErrorField }) {

  const [selectedPic, setPic] = useState(null);
  const [category, setCategory] = useState(null)
  const [classErrorMessage, setclassErrorMessage] = useState()

  const handleFileChange = (e)=>{
    const MAX_FILE_SIZE = 10240;
    if(e.target.files.length >0){
      const PIC_SIZE = e.target.files[0].size/1024;
      if (PIC_SIZE < MAX_FILE_SIZE){
        setPic(e.target.files[0]);
        updateField({profile:e.target.files[0]});
      }
    }
  }

  const handleCategory=(e)=>{
    const class_value = e.target.value
    updateField({ current_class: class_value })
    
    if (class_value >=5 && class_value <=8){
      setCategory("Junior");
      setclassErrorMessage("")
      classErrorField(false)
    }
    else if (class_value >= 9 && class_value <=10){
      setCategory("Secondary");
      setclassErrorMessage("")
      classErrorField(false)
      
    }
    else if(class_value >= 11 && class_value <=12){
      setCategory("Senior");
      setclassErrorMessage("")
      classErrorField(false)
    }
    else{
      setCategory("");
      setclassErrorMessage("Only Students from class 5 to 12 allowed to participate")
      classErrorField(true)
      if (class_value===""){
        setclassErrorMessage("")
      }
    }
  }
  
  return (
    <>
      <div className="space-y-12">
        <div className="pd-5">

          <h2 className="text-base font-semibold leading-7 text-gray-900">Participant Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-full text-center">
              <img
                className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
                src={selectedPic? URL.createObjectURL(selectedPic): avatar}
                alt=""
              />
            </div>

            <div className="sm:col-span-4">
              <label for="file-input" className="sr-only">Choose file</label>
              <input type="file" accept="image/png,image/jpeg" onChange={handleFileChange} name="file-input" id="file-input" className="block outline-none w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4" />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={e => updateField({ name: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone no.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  required
                  id="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={e => updateField({ phone: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={email}
                  onChange={e => updateField({ email: e.target.value })}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={e => updateField({ password: e.target.value })}
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="nid" className="block text-sm font-medium leading-6 text-gray-900">
                NID/Birth Certificate
              </label>
              <div className="mt-2">
                <input
                  id="nid"
                  name="nid"
                  type="text"
                  required
                  value={nid}
                  onChange={e => updateField({ nid: e.target.value })}
                  autoComplete="nid"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  value={dob}
                  onChange={e => updateField({ dob: e.target.value })}
                  autoComplete="dob"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="school" className="block text-sm font-medium leading-6 text-gray-900">
                School
              </label>
              <div className="mt-2">
                <input
                  id="school"
                  name="school"
                  type="text"
                  required
                  value={school}
                  onChange={e => updateField({ school: e.target.value })}
                  autoComplete="school"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Class
              </label>
              <div className="mt-2">
                <input
                  id="class"
                  name="class"
                  type="text"
                  required
                  value={current_class}
                  onChange={handleCategory}
                  autoComplete="class"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="text-xs mt-3 text-red-600">{classErrorMessage}</p>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="text"
                  readOnly
                  value={category}
                  autoComplete="category"
                  className="block w-full rounded-md border-0 py-1.5 outline-none bg-slate-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Division
              </label>
              <div className="mt-2">
                <input
                  id="division"
                  name="division"
                  type="text"
                  required
                  value={division}
                  onChange={e => updateField({ division: e.target.value })}
                  autoComplete="division"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="reference" className="block text-sm font-medium leading-6 text-gray-900">
                Reference
              </label>
              <div className="mt-2">
                <input
                  id="reference"
                  name="reference"
                  type="text"
                  value={reference}
                  onChange={e => updateField({ reference: e.target.value })}
                  autoComplete="reference"
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
