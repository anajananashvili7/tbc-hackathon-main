import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { MentorButtons } from './MentorButtons';

export function MentorCard({ item }: { item: ITutor }) {
  const { photo, user, city, subject, id } = item;
  return (
    <Card sx={{ maxWidth: 300, width: 300 }}>
      <CardMedia
        sx={{ height: 200, backgroundPosition: "0 30%" }}
        image={photo}
        title="ავატარი"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${user.first_name}`}
        </Typography>
        <Rating name="read-only" value={4.7} precision={0.5} size='small' readOnly />
        <Typography variant="subtitle2" m="0.5rem 0">
          {`ქალაქი: ${city}`}
        </Typography>
        <Typography variant="subtitle2" m="0.5rem 0">
          {`საგანი: ${subject}`}
        </Typography>
      </CardContent>
      <MentorButtons id={id} />
    </Card>
  )
}
