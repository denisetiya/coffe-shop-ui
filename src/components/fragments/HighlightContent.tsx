import { ShoppingCart } from '@phosphor-icons/react'
import coffeTop from '../../assets/highlight-coffe.png'
import {Button1, Button2} from '../widget/Button'
import coffe1 from '../../assets/coffe.svg'
import coffe2 from '../../assets/coffe-2.png'
import PopularCoffe from './PopularCoffe'

function HighlightContent() {
  return (
    <div>
      <div className="bg-[#F6EBDA] pt-52 relative pb-40" >
        <img src={coffe1} alt="coffer" width={599} height={394} className='absolute top-0 right-0 ' />    
        <img src={coffe2} alt="coffer" width={569} height={344} className='absolute bottom-0 left-0 ' />       
        <div className='flex justify-between items-center px-48'>
          <div>
              <p className='text-5xl font-poppins font-semibold'>
                  Enjoy your <b className='text-[#FF902B]'>Coffee</b> <br />
                  before your activity
              </p>
              <p className='mt-20'>
                  Boost your productivity and build your <br /> mood with a glass of coffee in the morning 
              </p>
              <div className='mt-20 flex gap-3 items-center'>
                  <Button1 name='Order Now' icon={<ShoppingCart size={20} />} />
                  <Button2 name='Learn More' />
              </div>
          </div>
          <img src={coffeTop} alt="coffe-top" width="600px" className='z-10'/>
        </div>
        <div className='mt-40'>
          <PopularCoffe />
        </div>
      </div>

      <div className='h-[267px] bg-white relative flex justify-end items-center'>
        <div className='h-[367px] bg-[#F9D9AA] rounded-3xl -top-20 mr-20  absolute w-[1268px]'>
        
        </div>
      </div>
    </div>
  )
}

export default HighlightContent
