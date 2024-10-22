import { MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'

function Navbar() {
  return (
    <div className='fixed w-full z-20'>
        <div className='flex justify-between pt-10 px-48 bg-transparent'>
            <div className='bg-[#F6EBDA] p-2 rounded-full'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='flex gap-4 items-center px-3 rounded-3xl bg-[#F6EBDA]'>
                 <p className='text-[#FF902B] hover:text-black hover:cursor-pointer hover:font-bold transition-all duration-150'>
                    About Us
                </p>
                <p className='hover:text-[#FF902B] hover:cursor-pointer hover:font-bold transition-all duration-150'>
                    Our Product
                </p>
                <p className='hover:text-[#FF902B] hover:cursor-pointer hover:font-bold transition-all duration-150'>
                    Delivery
                </p>



            </div>

            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <MagnifyingGlass size={32} className='absolute top-3 left-3'/>
                    <input  type="text" placeholder="Search" className='rounded-3xl border-2 p-3 px-6 pl-12 outline-[#FF902B]'/>
                </div>

                <div>
                    <ShoppingCart size={32} weight="fill" className='hover:text-[#FF902B] transition-all duration-150 cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
