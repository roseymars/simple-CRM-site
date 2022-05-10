import TicketCard from "../components/TicketCard"
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import CategoriesContext from "../context"

const Dashboard = () => {
  const [tickets, setTickets] = useState(null)
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/tickets")
      const dataObject = response.data.data

      const arrayOfKeys = Object.keys(dataObject)
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
      const formattedArr = []
      arrayOfKeys.forEach((key, index) => {
        const formattedData = { ...arrayOfData[index] }
        formattedData["documentId"] = key
        formattedArr.push(formattedData)
      })
      console.log(formattedArr, "formatted arr")
      setTickets(formattedArr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)"
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  return (
    <div className="dashboard">
      <h1 style={{ fontSize: "large" }}>My Projects</h1>
      <div className="ticket-container">
        {/* <TicketCard /> */}
        {tickets &&
          uniqueCategories?.map((uniqueCategory, catIndex) => (
            <div key={catIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[catIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard
