
interface type {
    name: string,
    href: string
}

function Nav_link({name, href}:type) {
  return (
    <a href={href} className="text-[1.4rem] text-[#404040] font-semibold font-open   ">{name}</a>
  )
}

export default Nav_link
