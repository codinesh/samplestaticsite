import { SortAscendingIcon, UsersIcon } from "@heroicons/react/solid"

export default function TelephoneInput() {
  return (
    <div>
      <div className="flex mt-1 rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-xs text-gray-500">+91 - </span>
          </div>
          <input
            type="text"
            name="tel"
            id="tel"
            className="block w-full pl-16 bg-transparent border-gray-300 rounded-l-xl active:border-primary focus:ring-primary focus:border-primary ring-primary ring-offset-primary border-primary focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="your contact number"
          />
        </div>
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SortAscendingIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Sort</span>
        </button>
      </div>
    </div>
  )
}
