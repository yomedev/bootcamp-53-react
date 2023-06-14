import { useEffect, useMemo } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../../components/Users/SearchInput";
import { UsersList } from "../../../components/Users/UsersList";
import { Modal } from "../../../components/Modal";
import { NewUserForm } from "../../../components/Users/NewUserForm";
import { deleteUserAction } from "../../../redux/actions";

const LOCAL_STORAGE_USERS_KEY = "users";

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

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
  }, [users]);

  const handleDeleteUser = (id) => {
    // const action = { type: DELETE_USER, payload: id };
    // dispatch(action);

    dispatch(deleteUserAction(id))
  };

  const handleCreateNewUser = (user) => {
    const action = {
      type: "CREATE_USER",
      payload: { ...user, id: Date.now() },
    };
    dispatch(action);
  };

  const toggleModal = () => {
    const action = { type: "TOGGLE_MODAL" };
    dispatch(action);
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    const action = { type: "CHANGE_SEARCH", payload: value };
    dispatch(action);
  };

  const handleResetSearch = () => {
    const action = { type: "CHANGE_SEARCH", payload: "" };
    dispatch(action);
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
