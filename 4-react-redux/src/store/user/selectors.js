export const selectUserModule = (state) => state.user;

export const selectUsers = (state) =>
  Object.values(selectUserModule(state).entities);