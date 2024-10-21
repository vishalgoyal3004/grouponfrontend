import { CardContent, Card, Typography, CardMedia, Box } from "@mui/material"
import Colors from "../styles/Colors"
import PropTypes from "prop-types"

export default function SingleCard({ data }) {
  return (
    <Card
      sx={{
        display: "flex",
        border: `2px solid grey`,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "1rem",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0,0,0,0.4)",
          border: `2px solid ${Colors.grp.gold}`,
        },
      }}
    >
      <CardMedia component="img" image={data?.thumbnail?.source} />
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
SingleCard.propTypes = {
  data: PropTypes.object,
}
