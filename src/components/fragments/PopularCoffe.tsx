
import Card from '../widget/Card'

function PopularCoffe() {
  return (
    <div>
      <p className="text-3xl font-poppins font-semibold text-end pr-10">
        Popular Coffe
      </p>

      <div className='flex justify-center'>
        <div className='absolute -bottom-32 z-10'>
            <Card Rating={5.9} description='Cappucino'  price={20} title='Cappucino' />
        </div>
      </div>

    </div>
  )
}

export default PopularCoffe
