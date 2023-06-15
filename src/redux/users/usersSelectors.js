import { createSelector } from "@reduxjs/toolkit";

export const selectUsersData = (state) => {
  return state.users.items;
};
export const selectUsersSearch = (state) => state.users.search;
export const selectUsersIsModalOpen = (state) => state.users.isModalOpen;

export const selectFilteredUsers = createSelector(
  [selectUsersData, selectUsersSearch],
  (users, search) => {
    console.log("select");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }
);

export const selectOpenToWorkTotal = createSelector(
  selectFilteredUsers,
  (users) => {
    return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
  }
);

// export const selectFilteredUsers1 = (state) => {
//   const users = selectUsersData(state);
//   const search = selectUsersSearch(state);
//   return users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase().trim())
//   );
// };

// export const selectOpenToWorkTotal1 = (state) => {
//   const users = selectFilteredUsers(state);
//   return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
// };
