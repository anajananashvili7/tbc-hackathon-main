import { Mentors } from "@/components/Mentors/Mentors"

interface IProps {
  searchParams: {
    searchText?: string,
    page?: string,
    city?: string,
    subject?: string,
  }
}

export default function page({ searchParams }: IProps) {
  return (
    <>
      <Mentors params={searchParams} />
    </>
  )
}
