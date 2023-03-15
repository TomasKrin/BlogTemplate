// import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";

// type Props = {
//   title: string;
//   subtitle: string;
//   picUrl: string;
// };

// const PageCard = ({ title, subtitle, picUrl }: Props) => {
//   return (
//     <Paper>
//       <Card>
//         <Box>
//           <Typography variant="h4">{title}</Typography>
//           <Typography variant="subtitle1">{subtitle}</Typography>
//         </Box>
//         <CardMedia
//           component="img"
//           sx={{ width: 151 }}
//           image={picUrl}
//           alt="Live from space album cover"
//         />
//       </Card>
//     </Paper>
//   );
// };

// export default PageCard;

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
  img: string;
};

const PageCard = ({ title, subtitle, img }: Props) => {
  return (
    <Card sx={{ width: 450 }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <CardMedia component="img" height="250" width="50" image={img} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PageCard;
