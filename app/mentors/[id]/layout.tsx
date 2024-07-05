import { getAnyData } from "@/services/utils";


interface IProps {
  params: {
    id: number,
  }
}

export async function generateMetadata({ params: { id } }: IProps) {
  const tutor = await getAnyData<ITutor>(`https://freegrand.pythonanywhere.com/api/tutor/${id}`, { next: { revalidate: 3600 } });

  if (!tutor?.id) return { title: "Tutor not found!" };

  const { description, user } = tutor;

  return {
    title: `${user.first_name} ${user.last_name}`,
    description: description,
  }
}


export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}