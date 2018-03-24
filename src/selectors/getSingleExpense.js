const getSingleExpense = (expenses, id) => {
    return expenses.filter(expense => expense.id === id)[0]
}

export default getSingleExpense