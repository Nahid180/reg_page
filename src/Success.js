import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Success() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full mx-5 my-5 rounded overflow-hidden shadow-lg bg-green-500 md:w-1/2 lg:w-1/4">

          <div className="px-8 py-6">
            <FontAwesomeIcon className="w-full h-20 text-slate-200" icon={faIdCard} />
            <div className="font-bold w-full text-4xl mb-2 text-center mt-5 text-green-800">Success</div>

          </div>
        </div>
      </div>
    </>
  )
}