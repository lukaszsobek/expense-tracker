const getSingleExpense = (expenses, id) => {
    return expenses.find(expense => expense.id === id)
}

export default getSingleExpense