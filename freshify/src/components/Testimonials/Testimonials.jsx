import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading/Heading";
import feedback1 from '../../assets/feedback-1.png'
import feedback2 from '../../assets/feedback-2.png'
import feedback3 from '../../assets/feedback-3.png'


const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Customers" heading="Saying" />
        {/* bassdmds,aa,s  */}
   <div className="flex justify-end py-5 gap-x-3">
  <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
    <IoIosArrowBack />
  </button>
  <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
    <IoIosArrowForward />
  </button>
</div>

{/* Testimonial Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="bg-zinc-100 rounded-xl p-8">
    <div className="flex gap-5 items-center">
      <img
        src={feedback1}
        className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500"
      />
      <div>
        <h5 className="text-xl font-bold">Sarah Johnson</h5>
        <p className="text-zinc-600">Designer</p>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <div className="mt-6">
      <p className="text-zinc-600">
        This platform has really helped me improve my workflow. The team is
        supportive and the service is excellent!
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-zinc-100 rounded-xl p-8">
    <div className="flex gap-5 items-center">
      <img
        src={feedback2}
        
        className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500"
      />
      <div>
        <h5 className="text-xl font-bold">Michael Lee</h5>
        <p className="text-zinc-600">Developer</p>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <div className="mt-6">
      <p className="text-zinc-600">
        I love how easy it is to use! The experience has been smooth and
        professional from start to finish.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-zinc-100 rounded-xl p-8">
    <div className="flex gap-5 items-center">
      <img
        src={feedback3}
        className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500"
      />
      <div>
        <h5 className="text-xl font-bold">Emily Carter</h5>
        <p className="text-zinc-600">Entrepreneur</p>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <div className="mt-6">
      <p className="text-zinc-600">
        Great experience overall! I highly recommend it to anyone looking for
        quality service and reliable support.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Testimonials;
