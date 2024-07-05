interface ITutor {
  id: number,
  user: {
    first_name: string,
    last_name: string,
    email?: string,
    phone_number?: string
  },
  city: string,
  subject: string,
  month_price: string,
  average_rating: number,
  photo: string,
  description?: string,
}