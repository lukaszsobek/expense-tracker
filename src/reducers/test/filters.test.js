import moment from "moment"
import { filtersReducer } from "../"

describe("filtersReducer handles",() => {

    it("initialization", () => {
        const action = { type: "@@INIT" }
        expect(filtersReducer(undefined,action)).toEqual({
            "endDate": moment().endOf("month"),
            "sortBy": "date",
            "startDate": moment().startOf("month"),
            "text": ""
        })       
    })

    it("default action", () => {
        const state = {}
        const action = {}
        expect(filtersReducer(state,action)).toEqual({})   
    })

    it("SET_TEXT_FILTER", () => {
        const state = {}
        const text = "test"
        const action = { type: "SET_TEXT_FILTER", text}
        expect(filtersReducer(state,action)).toEqual({
            "text": "test"
        })          
    })

    it("SORT_BY", () => {
        const state = {}
        const value = "test"
        const action = { type: "SORT_BY", value}
        expect(filtersReducer(state,action)).toEqual({
            "sortBy": "test"
        })          
    })

    it("SET_START_DATE_FILTER", () => {
        const state = {}
        const date = "test"
        const action = { type: "SET_START_DATE_FILTER", date}
        expect(filtersReducer(state,action)).toEqual({
            "startDate": "test"
        })          
    })    

    it("SET_END_DATE_FILTER", () => {
        const state = {}
        const date = "test"
        const action = { type: "SET_END_DATE_FILTER", date}
        expect(filtersReducer(state,action)).toEqual({
            "endDate": "test"
        })          
    }) 



})
