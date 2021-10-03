import React from "react"
import TelephoneInput from "./Telephone"

const MainAction = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0, 0.9)), url(https://plavafintech.com/wp-content/uploads/2021/07/1-2.png)",
      }}
      className="flex flex-col items-center pt-20 mx-auto bg-center bg-no-repeat bg-cover gap-y-20"
    >
      <h1 className="text-center text-primary text-7xl">
        Travel Now Pay Later!
      </h1>
      <span className="text-2xl text-white">
        Just one click away from your next trip.
      </span>
      <div>
        <TelephoneInput />
      </div>
      <a href="#" className="text-2xl underline">
        How it works?
      </a>
    </section>
  )
}

export default MainAction
