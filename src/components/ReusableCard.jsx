import {
  Button,
  CardContent,
  Container,
  Card,
  Typography,
  CardActions,
  CardMedia,
} from "@mui/material"
import Grid from "@mui/material/Grid2"

export default function ReusableCard({ data }) {
  return (
    <Container>
      <Grid container spacing={3} marginTop={"2rem"} alignItems={"center"}>
        {Object.keys(data)?.map((key) => {
          return (
            <Grid size={4} key={key}>
              <Card style={{ minHeight: 500 }}>
                <CardMedia
                  sx={{
                    width: 300,
                    height: 300,
                  }}
                  image={data[key]?.thumbnail?.source}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data[key]?.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {data[key]?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => console.log("hello")}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
