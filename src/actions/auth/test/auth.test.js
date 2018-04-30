import { logIn, logOut } from "../auth"
import { LOG_IN, LOG_OUT } from "../../../constants"

describe("auth returns",() => {
    it("correct logIn action",() => {
        const login = "test"
        expect(logIn(login)).toEqual({
            type: LOG_IN,
            uid: login
        })
    })
    
    it("correct logOut action",() => {
        const login = "test"
        expect(logOut()).toEqual({ type: LOG_OUT })
    })
})

