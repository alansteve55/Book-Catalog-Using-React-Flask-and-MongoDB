import React, { useEffect, useState } from 'react';
import { Navbar, Table, Container, Row, Col, Button, ButtonGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadbooks, addbooks, deletebook, loadSingleBook, updatebook } from './redux/actions';

const initialState = {
  title: "",
  author: "",
  published_date: "",
  isbn: "",
  genre: ""
};

const Home = () => {
  const [state, setState] = useState(initialState);
  const [edit, setEdit] = useState(false);
  const [bookId, setBookId] = useState(null);
  const dispatch = useDispatch();
  const { books, msg, book } = useSelector(state => state.data);

  const { title, author, published_date, isbn, genre } = state;

  useEffect(() => {
    dispatch(loadbooks());
  }, [dispatch]);

  useEffect(() => {
    if (msg) {
      alert(msg);
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 1000);  // Clears the message after 1 second
    }
  }, [msg, dispatch]);

  useEffect(() => {
    if (book) {
      setState({ ...book });
    }
  }, [book]);


  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !published_date || !isbn || !genre) {
      alert("Please fill all the required fields!")
    } else {
      if (!edit) {
        dispatch(addbooks(state));
        setState({ title: "", author: "", published_date: "", isbn: "", genre: "" });
      } else {
        dispatch(updatebook(state, bookId));
        setState({ title: "", author: "", published_date: "", isbn: "", genre: "" });
        setEdit(false);
        setBookId(null);
      }
    }


  };

  const handleDelete = (id) => {
    if (window.confirm("Are you wanted to delete the book ? ")) {
      dispatch(deletebook(id));
    }
  }

  const handleUpdate = (id) => {
    dispatch(loadSingleBook(id));
    setBookId(id);
    setEdit(true);
  }

  return (
    <>
      <Navbar bg='primary' variant='dark' className='justify-content-center'>
        <Navbar.Brand>Book Catalog System</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter the title of the book'
                  name='title'
                  value={title || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter the author of the book'
                  name='author'
                  value={author || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Published Date</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter the published date of the book'
                  name='published_date'
                  value={published_date || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter the ISBN number of the book'
                  name='isbn'
                  value={isbn || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter the genre of the book'
                  name='genre'
                  value={genre || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className='d-grid gap-2 mt-2'>
                <Button type='submit' variant='primary' size='lg'>{edit ? "Update book" : "Add book"}</Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published Date</th>
                  <th>ISBN</th>
                  <th>Genre</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {books && books.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.published_date}</td>
                    <td>{item.isbn}</td>
                    <td>{item.genre}</td>
                    <td>
                      <ButtonGroup>
                        <Button style={{ marginRight: "5px" }} variant="danger" onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                        <Button variant="secondary" onClick={() => handleUpdate(item.id)}>
                          Update
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
