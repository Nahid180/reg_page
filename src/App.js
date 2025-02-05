import { Navbar } from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faIdCard } from "@fortawesome/free-solid-svg-icons"

export default function Example() {
  return (
    <>
      <Navbar />
      {/* Hero Part */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Bangladesh Space Olympiad</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>

        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap w-full justify-center my-10">
        <div className="w-full mx-5 my-5 rounded overflow-hidden shadow-lg bg-gray-300 md:w-1/2 lg:w-1/4">
          <a href="/register">
            <div className="px-8 py-6">
              <FontAwesomeIcon className="w-full h-20 text-slate-700" icon={faUsers} />
              <div className="font-bold w-full text-xl mb-2 text-center mt-5 text-slate-800">Participant Registration</div>

            </div>
          </a>
        </div>

        <div className="w-full mx-5 my-5 rounded overflow-hidden shadow-lg bg-gray-800 md:w-1/2 lg:w-1/4">

          <div className="px-8 py-6">
            <FontAwesomeIcon className="w-full h-20 text-slate-200" icon={faIdCard} />
            <div className="font-bold w-full text-xl mb-2 text-center mt-5 text-slate-200">Visitor Registration</div>

          </div>
        </div>

       
      </div>


    </>
  )
}
