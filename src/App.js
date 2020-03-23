import React from "react"
import { TailwindThemeProvider, FillButton } from "tailwind-react-ui"
import { Wizard, Steps, Step } from "react-albus"
import { useForm } from "react-hook-form"
import theme from "./theme"
import { Box } from "tailwind-react-ui"

const HomeApp = () => {
  return (
    <TailwindThemeProvider theme={theme}>
      <div className="w-full max-w-md bg-gray-800">
        <Box p={4} text="white" bg="blue">
          COVID-19 Survey Australia
        </Box>
        <Wizard>
          <Steps>
            <Step
              id="merlin"
              render={({ next }) => (
                <div>
                  <h1>Merlin</h1>
                  <button onClick={next}>Next</button>
                </div>
              )}
            />
            <Step
              id="gandalf"
              render={({ next, previous }) => (
                <div>
                  <h1>Gandalf</h1>
                  <button onClick={next}>Next</button>
                  <button onClick={previous}>Previous</button>
                </div>
              )}
            />
            <Step
              id="dumbledore"
              render={({ previous }) => (
                <div>
                  <h1>Dumbledore</h1>
                  <button onClick={previous}>Previous</button>
                </div>
              )}
            />
          </Steps>
        </Wizard>
        <form action="" className=" bg-white shadow-md px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              type="password"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <FillButton brand="primary">Submit</FillButton>
          </div>
        </form>
      </div>
    </TailwindThemeProvider>
  )
}

export default HomeApp
