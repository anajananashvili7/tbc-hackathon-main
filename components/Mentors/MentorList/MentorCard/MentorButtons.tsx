"use client"

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export function MentorButtons({ id }: { id: number }) {
  return (
    <CardActions>
      <Button
        href={`https://www.facebook.com/sharer/sharer.php?u=${'https://tbc-hackathon.vercel.app/'}`}
        size="small"
        variant='outlined'
        sx={{ color: "var(--thirdColor)" }}
      >
        გაზიარება
      </Button>
      <Button href={`/mentors/${id}`} size="small" variant='outlined' sx={{ color: "var(--thirdColor)" }}>პროფილი</Button>
    </CardActions>
  )
}
