export const authInitialState = {}

const authReducer = (state = authInitialState, action) => {
    switch(action.type) {

        case "LOG_IN":
            return {
                uid: action.uid
            }

        case "LOG_OUT":
            return authInitialState

        default:
            return state
    }
}

export default authReducer