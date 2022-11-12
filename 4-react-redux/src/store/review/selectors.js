export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);