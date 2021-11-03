import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className='mx-2 text-2xl cursor-pointer hover:border-b-4 hover:text-green'
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('Home')
      else if (pathname === '/blogs') setActive('Blogs')
      else if (pathname === '/about') setActive('About')
   }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-4xl border-green'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='Home'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/about'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Blogs'
               route='/blogs'
            />
         </div>
      </div>
   )
}

export default Navbar
