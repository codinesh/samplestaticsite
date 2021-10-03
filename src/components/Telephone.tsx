import { SortAscendingIcon, UsersIcon } from "@heroicons/react/solid"

export default function TelephoneInput() {
  return (
    <div>
      <div className="flex text-xl rounded-md shadow-sm sm:text-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-md ">+91 - </span>
          </div>
          <input
            type="tel"
            maxLength={10}
            name="tel"
            id="tel"
            className="block w-full py-4 pl-16 bg-transparent rounded-l-xl active:border-primary focus:ring-primary focus:border-primary ring-primary active:ring-primary ring-offset-primary border-primary"
            placeholder="your contact number"
          />
        </div>
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 font-medium border border-gray-300 ring-primary active:ring-primary bg-primary rounded-r-md active:border-primary focus:ring-primary focus:border-primary ring-offset-primary border-primary "
        >
          <SortAscendingIcon className="w-5 h-5" aria-hidden="true" />
          <span>Start trip</span>
        </button>
      </div>
    </div>
  )
}
