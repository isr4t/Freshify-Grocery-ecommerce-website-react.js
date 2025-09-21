import React, { useState } from 'react'
import Heading from '../Heading/Heading'

const Products = () => {


 const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
 const [activeTab, setActiveTab] = useState('All');


  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-10'>
     <Heading highlight="Our" heading="Products" />




      {/* tabs  */}


      <div className='flex gap-3 justify-center mt-10 '>
        {categories.map(category=>{
          return(
            <button key={category} 
            className={` px-5 py-2 text-lg rounded-lg cursor-pointer
            ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
            onClick={()=>setActiveTab(category)}>
              {category}
            </button>
          )
        })}
      </div>
    </div>
   </section>
  )
}

export default Products;
