import { userSlice } from "./index";
import { prepareData } from "../utils";
import { selectUsers } from "./selectors";

export const loadUsersIfNotExist = (dispatch, getState) => {
  if (selectUsers(getState())?.length > 0) {
    return;
  }

  dispatch(userSlice.actions.startLoading());
  fetch("http://localhost:3001/api/users")
    .then((response) => response.json())
    .then((users) => {
      dispatch(userSlice.actions.successLoading(prepareData(users)));
    })
    .catch(() => {
      dispatch(userSlice.actions.failLoading());
    });
};
