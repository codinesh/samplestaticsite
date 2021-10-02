import React from "react"
import TelephoneInput from "./Telephone"

const MainAction = () => {
  return (
    <section className="flex flex-col items-center gap-8 mx-auto">
      <h1 className="text-center text-7xl">Travel Now Pay Later!</h1>
      <span>Just one click away from your next trip.</span>
      <div>
        <TelephoneInput />
      </div>
      <a href="#" className="underline">
        How it works?
      </a>
    </section>
  )
}

export default MainAction
