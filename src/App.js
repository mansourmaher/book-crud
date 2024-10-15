import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBookPage from "./pages/Create";
import ListBooks from "./pages/ListBooks";
import { useState, useCallback, useEffect } from "react";
import EditBookPage from "./pages/EditPage";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addNewBook = useCallback((book) => {
    console.log("book from app page" + book);
    const id = books.length + 1;
    book.id = id;
    setBooks([...books, book]);
  });
  const deleteBook = useCallback((id) => {
    setBooks(books.filter((book) => book.id !== id));
  });

  const getBookById = useCallback((id) => {
    return books.find((book) => book.id == id);
  });
  const updateBook = useCallback(
    (book) => {
      console.log("id" + book.id);
      const indexOfthebOOK = books.findIndex((b) => b.id == book.id);

      const updatedBooks = [...books];
      updatedBooks[indexOfthebOOK] = book;
      setBooks(updatedBooks);
    },
    [books]
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ListBooks books={books} handelDelete={deleteBook} />}
        />
        <Route
          path="/create"
          element={<CreateBookPage handelAddNewBook={addNewBook} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditBookPage
              handelGetBookById={getBookById}
              handelUpdate={updateBook}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
