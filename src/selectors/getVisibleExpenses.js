const getVisibleExpenses = (
    expenses,
    { text, sortBy, startDate, endDate }
) => {
    return expenses.filter(({
        description, note, createdAt
    }) => {
        const textMatch = 
            description.toLowerCase().indexOf(text.toLowerCase()) > -1
            || note.toLowerCase().indexOf(text.toLowerCase()) > -1

        const startDateMatch = 
            typeof startDate !== "number"
            || createdAt >= startDate

        const endDateMatch = 
            typeof endDate !== "number"
            || createdAt <= endDate

        return textMatch && startDateMatch && endDateMatch
    }).sort((a,b) => {
      if(sortBy == "date") {
        return a.createdAt - b.createdAt
      } else {
        return b.amount - a.amount
      }
    })
}

export default getVisibleExpenses