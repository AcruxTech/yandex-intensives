export const selectCartModule = (state) => state.cart;

export const selectBooks = (state) =>
  selectCartModule(state);

export const selectBookCount = (state, bookId) =>
  selectCartModule(state)[bookId];
