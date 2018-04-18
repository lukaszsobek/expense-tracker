const getExpensesSummary = (expenses = []) => ({
    count: expenses.length,
    total: expenses.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.amount
    },0)
})    

export default getExpensesSummary