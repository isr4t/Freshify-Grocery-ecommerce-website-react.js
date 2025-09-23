import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading/Heading";
import Feedback1 from "../../assets/feedback-1.png";
import Feedback2 from "../../assets/feedback-2.png";
import Feedback3 from "../../assets/feedback-3.png";
import Feedback4 from "../../assets/feedback-4.png";

import "swiper/css";
import "swiper/css/navigation";

const testimonial = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Designer",
    rating: 5,
    para: "I always find the freshest fruits and vegetables here. Delivery is quick, and the prices are very reasonable. Shopping has never been this easy",
    image: Feedback1,
  },
  {
    id: 2,
    name: "Michael Lee",
    profession: "Developer",
    rating: 5,
    para: "Great service and wide product selection. I love how I can order everything from dairy to snacks in one place. Highly recommended",
    image: Feedback2,
  },
  {
    id: 3,
    name: "Emily Carter",
    profession: "Entrepreneur",
    rating: 5,
    para: "This platform has really helped me improve my workflow. The team is supportive and the service is excellent",
    image: Feedback3,
  },
  {
    id: 4,
    name: "John Doe",
    profession: "Chef",
    rating: 5,
    para: "Fast delivery, quality products, and excellent customer support. This is my go-to grocery store online.",
    image: Feedback4,
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Wait until refs exist before initializing Swiper
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Saying" />

        {/* Navigation Arrows */}
        <div className="flex justify-end py-5 gap-x-3">
          <button
            ref={prevRef}
            className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            spaceBetween={30}
            slidesPerView={2} // Show 2 testimonials
            breakpoints={{
              0: { slidesPerView: 1 },      // mobile: 1 slide
              768: { slidesPerView: 2 },    // tablet: 2 slides
              1024: { slidesPerView: 2 },   // desktop: 2 slides
            }}
          >
            {testimonial.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-zinc-100 rounded-xl p-8">
                  <div className="flex gap-5 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500"
                    />
                    <div>
                      <h5 className="text-xl font-bold">{item.name}</h5>
                      <p className="text-zinc-600">{item.profession}</p>
                      <span>{"⭐".repeat(item.rating)}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-zinc-600">{item.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
