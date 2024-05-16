import { useMultistepForm } from "./useMultistepForm";
import RegFormOne from "./forms/RegFormOne";
import RegFormTwo from "./forms/RegFormTwo";
import { useState } from "react";
import { Overview } from "./Overview";

//https://bso.bsrs.com.bd/admin/api/bso/registration
const base_url =  "https://localhost:300/"
const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  current_class: "",
  school: "",
  dob: "",
  nid: "",
  password: "",
  fathers_name: "",
  mothers_name: "",
  fathers_phone: "",
  mothers_phone: "",
  division: "",
  reference: "",
  profile: "",
}

function Signup() {

  const [data, setData] = useState(INITIAL_DATA)
  const [isPending, setisPending] = useState(false)
  const [classError, setclassError] = useState(true)

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })

  }
  const { steps, currentStepindex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <RegFormOne {...data} updateField={updateFields} classErrorField={setclassError}/>,
    <RegFormTwo {...data} updateField={updateFields} />,
    <Overview Alldata={data} />
  ])

  function createPayment(fname,email, amount){
    const payment_data={
      full_name:fname,
      email:email,
      amount:amount,
      metadata: "null",
      redirect_url: "succes",
      cancel_url:"failed",
    }
    fetch("https://sandbox.uddoktapay.com/api/checkout-v2",{
      method:"POST",
      headers: {"Content-Type":"application/json", "Accept":"application/json","RT-UDDOKTAPAY-API-KEY":"982d381360a69d419689740d9f2e26ce36fb7a50"},
      body:payment_data,

    }).then((res)=>{
      console.log(res)
      setisPending(false)
    })
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    setisPending(true)
    const api_data = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      class: data.current_class,
      school: data.school,
      dob: data.dob,
      nid: data.nid,
      password: data.password,
      fathers_name: data.fathers_name,
      mothers_name: data.mothers_name,
      fathers_phone: data.fathers_phone,
      mothers_phone: data.mothers_phone,
      division: data.division,
      reference: data.reference,
      profile_image: data.profile,
      roll_no: 12
    }

    fetch("https://bso.bsrs.com.bd/admin/api/bso/registration",{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: api_data
    }).then((res)=>{
      console.log(res);
      console.log(api_data)
      createPayment({fnam:api_data.name, email:api_data.email, amount:200})
    })
  }

  return (
    <>

      <div className="w-full flex justify-center items-center ">
        <div className="w-full my-10 px-10 py-5 shadow-lg md:w-3/5 lg:w-1/3">
          <h5 className="text-sm leading-7 text-gray-700">Step {currentStepindex + 1} of {steps.length}</h5>

          <form onSubmit={onSubmit}>
            {step}
            <br />
            <div className="flex justify-between gap-x-6">
              <div className="w-full">
                {!isFirstStep && <button onClick={back} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Back
                </button>}
              </div>
              {classError?<button disabled type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button> : <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLastStep ? "Proceed" : "Next"}</button> }
              
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Signup;