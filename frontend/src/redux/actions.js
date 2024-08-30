import * as types from "./types";
import axios from "axios";

const API = "http://localhost:5000";

// Action to get books
const getbooks = (books) => ({
    type: types.GET_BOOKS,
    payload: books
});

// Action to handle book addition
const bookadded = (msg) => ({
    type: types.ADD_BOOK,
    payload: msg
});

// Action to handle delete book
const bookdelete = (msg) => ({
    type: types.DELETE_BOOK,
    payload: msg
});

// Action to get a single book
const getbook = (books) => ({
    type: types.GET_SINGLE_BOOK,
    payload: books
});

// Action to handle update book
const bookupdate = (msg) => ({
    type: types.UPDATE_BOOK,
    payload: msg
});

// Action to load books
export const loadbooks = () => {
    return function (dispatch) {
        axios.get(`${API}/books`)
            .then((resp) => dispatch(getbooks(resp.data)))
            .catch((err) => console.log(err));
    };
};

// Action to add a new book
export const addbooks = (book) => {
    return function (dispatch) {
        axios.post(`${API}/books`, book)
            .then((resp) => {
                dispatch(bookadded(resp.data.msg)); // Corrected dispatch
                dispatch(loadbooks()); // Reload books after adding a new one
            })
            .catch((err) => console.log(err));
    };
};

// Action to delete a new book
export const deletebook = (id) => {
    return function (dispatch) {
        axios.delete(`${API}/book/${id}`)
            .then((resp) => {
                dispatch(bookdelete(resp.data.msg)); // Corrected dispatch
                dispatch(loadbooks()); // Reload books after adding a new one
            })
            .catch((err) => console.log(err));
    };
};

// Action to update a single book id
export const loadSingleBook = (id) => {
    return function (dispatch) {
        axios.get(`${API}/book/${id}`)
            .then((resp) => {
                dispatch(getbook(resp.data)); // Corrected dispatch
            })
            .catch((err) => console.log(err));
    };
};

// Action to update a book
export const updatebook = (book,id) => {
    return function (dispatch) {
        axios.put(`${API}/book/${id}`, book)
            .then((resp) => {
                dispatch(bookupdate(resp.data.msg)); // Corrected dispatch
                dispatch(loadbooks()); // Reload books after adding a new one
            })
            .catch((err) => console.log(err));
    };
};
