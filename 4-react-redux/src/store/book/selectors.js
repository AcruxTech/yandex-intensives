export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBooksByCategory = (state, bookCategory) => {
  const books = selectBooks(state);
  let books_by_categoty = []
  books.forEach(book => {
    if (book.category === bookCategory) {
      books_by_categoty.push(book)
    }
  });
  return books_by_categoty;
}

export const selectBookById = (state, bookId) => 
  selectBookModule(state).entities[bookId];

export const selectBookIds = (state, bookId) =>
  selectBookModule(state).entities[bookId].films;
