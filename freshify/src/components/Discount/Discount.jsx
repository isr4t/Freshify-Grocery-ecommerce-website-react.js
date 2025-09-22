import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/freshfruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className=' md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto  px-10 py-10'>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit self-center'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Discount</h3>
                <p className='text-zinc-600 my-6'>
                    Enjoy fresh savings on your very first order! Get an exclusive discount when you shop with us for the first time. Fill your basket with the groceries you love and save more while experiencing fast delivery and top-quality products.
                </p>

                <Button content="Get a Discount"/>
            </div>

        </div>
    </section>
  )
}

export default Discount
