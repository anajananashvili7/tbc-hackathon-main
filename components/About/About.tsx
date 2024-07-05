import "./About.css"
import Image from "next/image"
import background from "@/public/about_background.jpg"
import { AccordionComponent } from "../Accordion/Accordion"
import { MotionDiv } from "../MotionDiv/MotionDiv"
import { LandingAnimation, SliderAnimation } from "@/services/animations"

export function About() {
  return (
    <section className="about">
      <div className="about_background">
        <Image src={background} alt="background" priority sizes="100vw" quality={100} placeholder="blur" fill />
        <div className="about_info">
          <MotionDiv
            initial="initial"
            whileInView='animate'
            variants={LandingAnimation}
            viewport={{ once: true }}
          >
            <p>
              ჩვენი ვებგვერდი არის ინოვაციური პლატფორმა, სადაც მომხმარებლებს შეუძლიათ იპოვონ რეპეტიტორები ნებისმიერ საგანში,
              მიიღონ დეტალური ინფორმაცია მათ შესახებ და ასევე ნახონ მათი ხელმისაწვდომი დროები. პლატფორმა უზრუნველყოფს მარტივ და კომფორტულ გზას,
              რათა დაგეგმონ გაკვეთილები და მიიღონ მაღალი ხარისხის განათლება. ჩვენს მომხმარებლებს შეუძლიათ აირჩიონ რეპეტიტორები მათი გამოცდილების,
              შეფასებების და სპეციალობების მიხედვით. ჩვენი მიზანია, დავეხმაროთ მათ, რომ იპოვონ საუკეთესო რეპეტიტორი და მიაღწიონ სასურველ აკადემიურ მიზნებს.
            </p>
          </MotionDiv>
        </div>
      </div>
      <div className="accordion_container">
        <h3>ხშირად დასმული კითხვები</h3>
        <MotionDiv
          initial="initial"
          whileInView='animate'
          variants={SliderAnimation}
          viewport={{ once: true }}
        >
          <AccordionComponent />
        </MotionDiv>
      </div>
    </section>
  )
}
