import authReducer, { authInitialState } from "../auth"
import { INIT, LOG_IN, LOG_OUT } from "../../constants"

describe("authReducer handles",() => {

    it("initialization", () => {
        const action = { type: INIT }
        expect(authReducer(undefined,action)).toEqual(authInitialState)
    })

    it("log in",() => {
        const uid = "test"
        const action = { type: LOG_IN, uid }
        expect(authReducer(undefined,action)).toEqual({uid})
    })

    it("log out",() => {
        const state = { uid: "test"}
        const action = { type: LOG_OUT }
        expect(authReducer(state,action)).toEqual(authInitialState)
    })
})