import { useMemo } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../components/Users/SearchInput";
import { UsersList } from "../../components/Users/UsersList";
import { Modal } from "../../components/Modal";
import { NewUserForm } from "../../components/Users/NewUserForm";
import { deleteUserAction, createNewUserAction, toggleModalAction, changeSearchAction } from "../../redux/users/usersSlice";

// const LOCAL_STORAGE_USERS_KEY = "users";

// const getLocalUsers = () => {
//   const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
//   if (localData && localData) {
//     return localData;
//   }
//   return usersJson;
// };

export const UsersPage = () => {
  const {
    items: users,
    search,
    isModalOpen,
  } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUserAction(id));
  };

  const handleCreateNewUser = (user) => {
    dispatch(createNewUserAction(user));
  };

  const toggleModal = () => {
    dispatch(toggleModalAction());
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    dispatch(changeSearchAction(value));
  };

  const handleResetSearch = () => {
    const emptyString = "";
    dispatch(changeSearchAction(emptyString));
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  }, [search, users]);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={toggleModal}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput
        search={search}
        onChangeSearch={handleChangeSearch}
        onResetSearch={handleResetSearch}
      />

      {isModalOpen && (
        <Modal onCloseModal={toggleModal}>
          <NewUserForm
            onSubmit={handleCreateNewUser}
            onModalClose={toggleModal}
          />
        </Modal>
      )}
      <UsersList onDeleteUser={handleDeleteUser} users={filteredUsers} />
    </>
  );
};
