import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"

export default function ListItems({ data }) {
  console.log("data", data)
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data?.map((data) => {
        return (
          <>
            <ListItem key={data.pageid} alignItems="flex-start">
              <ListItemText
                primary={data?.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      Read Full Article
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        )
      })}
    </List>
  )
}
