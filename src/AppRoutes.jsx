import React from "react"
import { Routes, Route } from "react-router-dom"
import WikiPedia from "./pages/wikiPedia"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WikiPedia />} />
    </Routes>
  )
}

export default AppRoutes
