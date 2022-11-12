import { reviewSlice } from "./index";
import { prepareData } from "../utils";
import { selectReviews } from "./selectors";

export const loadReviewsIfNotExist = (dispatch, getState) => {
  if (selectReviews(getState())?.length > 0) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());
  fetch("http://localhost:3001/api/reviews")
    .then((response) => response.json())
    .then((reviews) => {
      console.log(reviews)
      dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
};
