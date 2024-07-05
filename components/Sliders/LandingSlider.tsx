"use client"

import "./LandingSlider.css"
import { MentorCard } from "../Mentors/MentorList/MentorCard/MentorCard";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Keyboard, Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { SliderAnimation } from "@/services/animations";

export function LandingSlider({ tutors }: { tutors: ITutor[] }) {
  return (
    <MotionDiv
      initial="initial"
      whileInView='animate'
      variants={SliderAnimation}
      viewport={{ once: true }}
    >
      <section className="landingSlider">
        <h1>თვის საუკეთესო მენტორები</h1>

        <div className="slider_container">
          <Swiper
            loop
            autoplay={{ delay: 6000 }}
            speed={600}
            keyboard={{ enabled: true }}
            navigation={true}
            modules={[Keyboard, Navigation, A11y, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {tutors.map(item =>
              <SwiperSlide key={item.id}>
                <MentorCard item={item} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
    </MotionDiv>
  )
}
