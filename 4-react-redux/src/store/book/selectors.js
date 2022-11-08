export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBookById = (state, bookId) =>
  selectBookModule(state).entities[bookId];

export const selectBookIds = (state, bookId) =>
  selectBookModule(state).entities[bookId].films;
