import "./FullMentor.css"
import { getAnyData } from "@/services/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@mui/material";

export async function FullMentor({ id }: { id: number }) {
  const tutor = await getAnyData<ITutor>(`https://freegrand.pythonanywhere.com/api/tutor/${id}`, { next: { revalidate: 3600 } });

  if (!tutor?.id) return notFound();

  const { description, photo, city, subject, user, address, month_price } = tutor;


  return (
    <section className="fullMentor">
      <Image src={photo} width={500} height={500} alt="user avatar" priority />
      <h1>
        {`${user.first_name} ${user.last_name}`}
      </h1>
      <div className="mentor_info">
        <p>
          <span>ქალაქი: </span>
          {city}
        </p>
        <p>
          <span>მისამართი: </span>
          {address}
        </p>
        <p>
          <span>საგანი: </span>
          {subject}
        </p>
        <p>
          <span>მენტორის შესახებ: </span>
          {description}
        </p>
        <p className="price">
          {month_price}
          <span> ₾</span>
        </p>
      </div>
      <div className="buttons">
        <Button
          href={`https://www.facebook.com/sharer/sharer.php?u=${`https://main.d5fxloxtpwqpz.amplifyapp.com/mentors/${id}`}`}
          variant='contained'
          sx={{ backgroundColor: "var(--thirdColor)" }}
        >
          გაზიარება
        </Button>
        <Button
          variant='contained'
          sx={{ backgroundColor: "var(--thirdColor)" }}
        >
          მენტორის აყვანა
        </Button>
      </div>
    </section>
  )
}
