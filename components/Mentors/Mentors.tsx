import "./Mentors.css"
import { MentorList } from "./MentorList/MentorList"
import { getAnyData } from "@/services/utils";
import Image from "next/image";
import background from "@/public/mentors_background.jpg"
import { MentorsFilters } from "./MentorsFilters/MentorsFilters";
import { PaginationUI } from "../PaginationUI/PaginationUI";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { LandingAnimation, SliderAnimation } from "@/services/animations";

interface IProps {
  params: {
    searchText?: string,
    city?: string,
    subject?: string,
    page?: string,
  }
}

export async function Mentors({ params }: IProps) {
  const tutors = await getAnyData<ITutor[]>("https://freegrand.pythonanywhere.com/api/tutor", { next: { revalidate: 3600 } });
  const searchText = params?.searchText || '';
  const cityParam = params?.city || '';
  const subjectParam = params?.subject || '';
  const page = Number(params?.page) || 1;

  const filteredTutors = tutors.filter(({ user, city, subject }) => {
    return (
      (searchText ? `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchText.toLowerCase()) : true) &&
      (cityParam ? city === cityParam : true) &&
      (subjectParam ? subject === subjectParam : true)
    )
  });

  const paginatedProducts = filteredTutors.slice(5 * (page - 1), page * 5);

  return (
    <div className="mentors">
      <div className="mentors_background">
        <Image src={background} alt="background" priority sizes="100vw" quality={100} placeholder="blur" fill />
        <div className="mentors_filters_container">
          <MotionDiv
            initial="initial"
            whileInView='animate'
            variants={LandingAnimation}
            viewport={{ once: true }}
          >
            <MentorsFilters />
          </MotionDiv>
        </div>

      </div>
      <MotionDiv
        initial="initial"
        whileInView='animate'
        variants={SliderAnimation}
        viewport={{ once: true }}
      >
        <MentorList tutors={paginatedProducts} />
        {filteredTutors.length && <PaginationUI total={Math.ceil(filteredTutors.length / 5)} />}
      </MotionDiv>
    </div>
  )
}
