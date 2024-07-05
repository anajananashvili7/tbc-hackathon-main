
import "./MentorList.css";
import { MentorCard } from "./MentorCard/MentorCard";

export function MentorList({ tutors }: { tutors: ITutor[] }) {

  return (
    <section className="mentorList">
      <div className="mentor_grid">
        {tutors.map(item => <MentorCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}
