import logo from '../../public/logo.svg'
import Nav_link from './nav_link'
import { FaSearch } from "react-icons/fa";
import Login from './Login';
import Button from './Button';
import enfants from '../../public/enfants.svg'
import retangle from '../../public/Rectangle.svg'
import Last from './Last';

function Final() {
  return (
    <div className='p-[2rem]'>
      <header className='flex items-center justify-between'>
        <img src={logo} alt="" />        
        <nav className='flex gap-[1.5rem]'>
          <Nav_link name='Home' href='Home' />
          <Nav_link name='About Us' href='About Us' />
          <Nav_link name='Institutions' href='Institutions' />
          <Nav_link name='Library' href='Library' />
          <Nav_link name='Projects' href='Projects' />
          <Nav_link name='Contact Us' href='Contact Us' />

        </nav>
        <div className='flex gap-[1rem] items-center'>
           <div className='text-[1.6rem] text-primary'>
             <FaSearch />
           </div>
           <Login name='Login' type='button' />
           <Button name='Register' type='button' />
        
        </div>
        
      </header>
      <section className='flex px-[3rem] mt-[2rem] bg-gradient-to-tr from-primary/5 to-transparent  rounded-3xl   '>
        <div className=' max-w-screen-md flex flex-col gap-[1rem] font-thin leading-none  mb-[2rem] '>
            <h1 className='font-poppins text-[5rem] font-semibold  '>
            Help build a
            <span className='text-primary'> Better Society </span>  
            for
            <span className='text-primary'> All</span>
            </h1>
            <span className='font-source text-[1.8rem] '>
            Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat. 
            </span>
            <Button name='Donate now' type='button' />
        </div>
        <div className='relative  w-full h-full  '>
            <img className='absolute right-0 top-0 ' src={retangle} alt="" />
            <img className='absolute top-[1rem] right-[2rem]' src={enfants} alt="" />
        </div>

      </section>
      <div className='flex justify-center gap-[2rem] mt-[2rem] '>
        <Last name='Orphans' href='Orphans' />
        <Last name='Poverty Relieved Childen' href='Orphans' />
        <Last name='Scholarship Based Students' href='Orphans' />

      </div>
    </div>
  )
}

export default Final
