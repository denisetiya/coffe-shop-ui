import React from "react"

interface ButtonProps {
    name: string,
    icon?: JSX.Element
}
const Button1 :React.FC<ButtonProps> =({name, icon }) =>{
  return (
    <>
      <button className={`bg-[#2F2105] text-white hover:bg-transparent border hover:border hover:text-black hover:border-[#2F2105] rounded-3xl px-6 py-2 flex gap-3 items-center font-poppins transition-all duration-200`}>
        <span>{name}</span>
        {icon}
      </button>
    </>
  )
}

const Button2 :React.FC<ButtonProps> =({name, icon }) =>{
  return (
    <>
      <button className={`bg-none border border-[#2F2105] rounded-3xl px-6 py-2 flex gap-3 items-center font-poppins transition-all duration-200 hover:bg-[#2F2105] hover:text-white hover:border-none`}>
        <span>{name}</span>
        {icon}
      </button>
    </>
  )
}


export {Button1, Button2}