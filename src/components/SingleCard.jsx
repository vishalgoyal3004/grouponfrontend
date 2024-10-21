import { CardContent, Card, Typography, CardMedia, Box } from "@mui/material"
import Colors from "../styles/Colors"
export default function SingleCard({ data }) {
  return (
    <Card sx={{ display: "flex", borderColor: Colors.grp.green }}>
      <CardMedia
        component="img"
        width={"30rem"}
        image={data?.thumbnail?.source}
      />
      <Box sx={{ flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {data?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {data?.extract}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
