import moment from "moment"

const getVisibleExpenses = (expenses, filters) => {

    const {
        text = "",
        sortBy = "date",
        startDate = null,
        endDate = null
    } = filters

    return expenses.filter(({
        description, note, createdAt
    }) => {
        const createdAtMoment = moment(createdAt)
        const textMatch = 
            description.toLowerCase().indexOf(text.toLowerCase()) > -1
            || note.toLowerCase().indexOf(text.toLowerCase()) > -1

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,"day") : true

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