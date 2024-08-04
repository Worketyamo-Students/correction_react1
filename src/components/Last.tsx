import React from 'react'
import user from '../../public/users.svg'

interface type {
    name: string,
    href: string
}


function Last({name, href}: type) {
  return (
    
    <div className=' text-[1.6rem] text-primary  flex items-center gap-[.5rem] w-fit p-[1rem] bg-[#EEddDD] rounded '>
        <img src={user} alt="" />
        <a href={href} >{name}</a>
    </div>
  )
}

export default Last
