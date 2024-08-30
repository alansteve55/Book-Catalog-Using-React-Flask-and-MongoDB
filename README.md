# Book Catalog

This is a Book Catalog web application built using Python Flask for the backend and React with Redux for the frontend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books stored in a MongoDB database.

## Features

- **Add Books**: Users can add new books to the catalog by entering the title, author, published date, ISBN, and genre.
- **View Books**: Users can view all books in the catalog in a tabular format.
- **Update Books**: Users can update the details of any book in the catalog.
- **Delete Books**: Users can delete any book from the catalog.

## Technology Stack

- **Frontend**: React, Redux, React Bootstrap
- **Backend**: Python Flask, Flask-PyMongo, Flask-CORS
- **Database**: MongoDB
- **State Management**: Redux

## Getting Started

### Prerequisites

- Python 3.11.4
- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-catalog.git
   cd book-catalog
   ```

2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Start MongoDB:
   Ensure MongoDB is running on your machine. You can start it using the following command:
   ```bash
   mongod
   ```

### Running the Application

1. Start the backend server:
   ```bash
   python app.py
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

3. Open your web browser and go to `http://localhost:3000` to access the application.

## API Endpoints

- `GET /books`: Retrieves all books in the catalog.
- `GET /book/<id>`: Retrieves a book by its ID.
- `POST /books`: Adds a new book to the catalog.
- `PUT /book/<id>`: Updates the details of an existing book.
- `DELETE /book/<id>`: Deletes a book by its ID.

## Project Structure

```
book-catalog/
├── client/                # React frontend
│   ├── public/            # Public directory
│   ├── src/               # Source files
│   └── package.json       # Frontend dependencies
├── .gitignore             # Ignored files
├── app.py                 # Flask backend
├── requirements.txt       # Backend dependencies
└── README.md              # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)


