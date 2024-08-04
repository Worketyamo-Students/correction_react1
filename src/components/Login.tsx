interface type {
    name : string
    type: "reset" | "submit" | "button"
}

function Login({name, type}: type) {
  return (
   <button type={type} className="text-primary text-[1.6rem] font-semibold " >{name}</button>
  )
}

export default Login
