import React from "react"
import { Box, Card, CardMedia, Container } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import ReusableAutocomplete from "../components/ReusableAutocomplete"
import SingleCard from "../components/SingleCard"
function WikiPedia() {
  const [articleList, setArticleList] = useState([])
  const [debTimeOut, setDebTimeOut] = useState(null)
  const [articleSearchInput, setArticleSearchInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchHistoryRecords, setSearchHistoryRecords] = useState([])
  const [articleDetails, setArticleDetails] = useState(null)

  const handleSearch = async (searchInput) => {
    if (searchInput.trim() === "") return
    try {
      setLoading(true)
      const responseData = await axios.get(
        `http://localhost:4000/search?article=${searchInput}`
      )
      setArticleList(responseData.data)
      setLoading(false)
      return Object.keys(responseData.data).map((key) => ({
        title: responseData.data[key]?.title,
        extract: responseData.data[key]?.extract,
        pageid: responseData.data[key]?.pageid,
        thumbnail: responseData.data[key]?.thumbnail,
      }))
    } catch (error) {
      console.log("error")
    }
  }
  const handleInputChange = (e, newValue) => {
    setArticleSearchInput(newValue)
    if (debTimeOut) {
      clearTimeout(debTimeOut)
    }
    setDebTimeOut(
      setTimeout(() => {
        if (articleSearchInput) {
          handleSearch(articleSearchInput).then((results) => {
            setArticleList(results)
          })
        }
      }, 500)
    )
  }
  const handleSearchHistory = (e, updatedValue) => {
    if (
      updatedValue &&
      !searchHistoryRecords.includes(updatedValue.title || updatedValue)
    ) {
      setSearchHistoryRecords([
        updatedValue.title || updatedValue,
        ...searchHistoryRecords,
      ])
      setArticleDetails({
        title: updatedValue.title,
        extract: updatedValue.extract,
        pageid: updatedValue.pageid,
        thumbnail: updatedValue.thumbnail,
      })
    }
  }

  return (
    <Container style={{ padding: "5rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ minWidth: 500, marginBottom: "3rem" }}>
          <CardMedia
            component="img"
            image="/images/wikipedia.jpg"
            sx={{ height: 150 }}
          />
        </Card>
      </Box>
      <ReusableAutocomplete
        options={[...searchHistoryRecords, ...articleList]}
        loading={loading}
        inputValue={articleSearchInput}
        name="SearchWikipedia"
        onInputChange={handleInputChange}
        onChange={handleSearchHistory}
        placeholder={"Search Wikipedia Article"}
      />
      {articleDetails && (
        <Box sx={{ marginTop: "5rem" }}>
          <SingleCard data={articleDetails} />
        </Box>
      )}
    </Container>
  )
}
export default WikiPedia
