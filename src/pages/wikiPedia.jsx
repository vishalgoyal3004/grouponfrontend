import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material"
import axios from "axios"
import { useState } from "react"
import ReusableCard from "../components/ReusableCard"
import SearchIcon from "@mui/icons-material/Search"

function WikiPedia() {
  const [articleList, setArticleList] = useState([])
  const [articleSearch, setArticleSearch] = useState({ article: "" })

  const handleInputChange = (e) => {
    setArticleSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSearch = async () => {
    if (articleSearch.article.trim() === "") return
    try {
      const responseData = await axios.get(
        `http://localhost:4000/search?article=${articleSearch.article}`
      )
      setArticleList(responseData.data)
    } catch (error) {
      console.log("error")
    }
  }
  return (
    <Container style={{ padding: "5rem" }}>
      <Typography
        style={{ textAlign: "center" }}
        variant="h3"
        marginBottom={"1rem"}
      >
        Wikipedia
      </Typography>
      <TextField
        sx={{
          borderRadius: "1rem",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
          },
        }}
        name="article"
        placeholder="Search Wikipedia Article"
        variant="outlined"
        value={articleSearch.article}
        onChange={handleInputChange}
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                style={{ backgroundColor: "lightblue" }}
                position="end"
              >
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Box textAlign={"center"} marginTop={"2rem"}>
        <Button variant="outlined" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {articleList && <ReusableCard data={articleList} />}
    </Container>
  )
}
export default WikiPedia
