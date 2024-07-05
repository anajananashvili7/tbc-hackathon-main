import { FullMentor } from "@/components/Mentors/FullMentor/FullMentor"


interface IProps {
  params: {
    id: number
  }
}

export default function page({ params: { id } }: IProps) {
  return (
    <>
      <FullMentor id={id} />
    </>
  )
}
