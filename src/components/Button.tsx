
interface type {
    name : string
    type: "reset" | "submit" | "button"
}

function Button({name, type}: type) {
  return (
   <button type={type} className="bg-primary text-[1.6rem] w-fit font-source text-[#FFF] px-[1.2rem] py-[.8rem] rounded "  >{name}</button>
  )
}

export default Button
