const filtersReducerInitialState = {
    text: "",
    sortBy: "date", //date or amount
    startDate: null,
    endDate: null 
}

const filtersReducer = (state = filtersReducerInitialState,action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.value
            }

        case "SET_START_DATE_FILTER":
            return {
                ...state,
                startDate: action.date
            }

        case "SET_END_DATE_FILTER":
            return {
                ...state,
                endDate: action.date
            }

        default:
            return state
    }
}

export default filtersReducer