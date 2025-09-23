import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits & veggies.png'
import DairyCat from '../../assets/milk & dairy.png'
import MeatCat from '../../assets/meat.png'
import{Link  } from 'react-router-dom'

const Category = () => {

  const renderCards = categories.map(card => {
    return (
      // card 
      <div key={card.id} className='flex-1 basis-[300px] transform transition duration-300 hover:scale-105 hover:shadow-xl'>
        
        {/* card image  */}
        <div className='w-full min-h-[25vh] relative'>
          <img 
            src={card.image} 
            alt={card.title} 
            className='absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[300px]' 
          />
        </div>

        {/* card content  */}
        <div className='bg-zinc-100 pt-20 p-8 rounded-xl'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
        <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white
      px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all 
      duration-300 cursor-pointer'>See All</Link>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='mt-20 mb-10'>
          <Heading highlight="Shop" heading="by Category"/>
        </div>

        {/* Category Cards */}
        <div className='flex flex-wrap gap-10 md:mt-15'>
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Category

// Categories Data
const categories = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: 'From leafy greens to root veggies, find the freshest produce straight from the farm.',
    image: FruitsCat,
    path:'/fruits'
  },
  {
    id: 2,
    title: 'Dairy Products',
    description: 'Pure and fresh milk, cheese, butter, and other dairy essentials for your daily nutrition.',
    image: DairyCat,
    path:'/dairy'
  },
  {
    id: 3,
    title: 'Meat & Sea food',
    description: 'Fresh meat and seafood, carefully sourced to bring quality and taste to your meals.',
    image: MeatCat,
    path:'/seafood'
  },
]

