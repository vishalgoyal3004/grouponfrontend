import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
import MockAdapter from "axios-mock-adapter"
import WikiPedia from "./wikiPedia"

const axios = require("axios")

const axiosMockProvider = new MockAdapter(axios)

describe("Renders Autocomplete with values", () => {
  afterEach(() => {
    axiosMockProvider.reset()
  })

  it("should render the Search wikipedia article autocomplete", () => {
    render(<WikiPedia />)
    const autoCompleteElement = screen.getByTestId("SearchWikipedia")
    expect(autoCompleteElement).toBeInTheDocument()
  })

  // it("should call the API on user inout", async () => {
  //   axiosMockProvider.onGet().reply(200, [
  //     {
  //       title: "Salman",
  //       extract: "He is a hero",
  //       pageid: "1123",
  //       thumbnail: {
  //         source: "xyz",
  //       },
  //     },
  //     {
  //       title: "Solman Bhai",
  //       extract: "He is a hero no1",
  //       pageid: "1124",
  //       thumbnail: {
  //         source: "abc",
  //       },
  //     },
  //   ])
  //   render(<WikiPedia />)
  //   const autoCompleteElement = screen.getByTestId("input-auto")
  //   userEvent.type(autoCompleteElement, "Salman")
  //   await waitFor(() => {
  //     const option = screen.getByText("Salman")
  //     expect(option).toBeInTheDocument()
  //   })
  //   const dropdownOption1 = screen.getByText("Salman")
  //   const dropdownOption2 = screen.getByText("Solman Bhai")

  //   expect(dropdownOption1).toBeInTheDocument()
  //   expect(dropdownOption2).toBeInTheDocument()
  // })
})
