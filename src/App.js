import React from "react"
import "./App.css"
import TableComponent from "./components/tableComponent"
import { useMemo } from "react"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  )

  const data = useMemo(() => [
    {
      firstName: "Rizwan",
      lastName: "Ijaz",
      age: 29,
      visits: "Dubai",
      progress: "Excellent",
      status: "British",
    },
  ])

  return (
    <ChakraProvider>
      <TableComponent columns={columns} data={data} />
    </ChakraProvider>
  )
}

export default App
