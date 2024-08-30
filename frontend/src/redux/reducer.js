import * as types from "./types";

const initialState = {
    books: [],
    book: {},
    msg: ""
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            }
        case types.ADD_BOOK:
        case types.DELETE_BOOK:
        case types.UPDATE_BOOK:
            return {
                ...state,
                msg: action.payload,
            }
        case types.GET_SINGLE_BOOK:
            return{
                ...state,
                book: action.payload,
            }
        case "CLEAR_MSG":
            return {
                ...state,
                msg: null,  // Clear the message
            }
        default:
            return state;
    }
}

export default bookReducer;