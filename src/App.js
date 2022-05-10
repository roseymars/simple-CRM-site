import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import TicketPage from "./pages/TicketPage"
import NavBar from "./components/NavBar"
import CategoriesContext from "../src/context"

const App = () => {
  const [categories, setCategories] = useState(null)
  const val = { categories, setCategories }
  return (
    <div className="app">
      <CategoriesContext.Provider value={val}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App
