import { Landing } from "@/components/Landing/Landing";
import { getAnyData } from "@/services/utils";
import { LandingSlider } from "@/components/Sliders/LandingSlider";

export default async function Home() {
  const data = (await getAnyData<ITutor[]>("https://freegrand.pythonanywhere.com/api/tutor")).slice(0, 5);

  return (
    <>
      <Landing />
      <LandingSlider tutors={data} />
    </>
  );
}
