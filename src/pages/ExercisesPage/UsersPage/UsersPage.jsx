import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../../components/Users/SearchInput";
import { UsersList } from "../../../components/Users/UsersList";
import { Modal } from "../../../components/Modal";
import { NewUserForm } from "../../../components/Users/NewUserForm";
import {
  deleteUserAction,
  createNewUserAction,
  toggleModalAction,
  changeSearchAction,
} from "../../../redux/users/usersSlice";
import {
  selectFilteredUsers,
  selectOpenToWorkTotal,
  selectUsersIsModalOpen,
} from "../../../redux/users/usersSelectors";

export const UsersPage = () => {
  // const users = useSelector((state) => {
  //   console.log("select");
  //   return state.users.items;
  // });
  const isModalOpen = useSelector(selectUsersIsModalOpen);

  const dispatch = useDispatch();

  const handleDeleteUser = (id) => dispatch(deleteUserAction(id));

  const handleCreateNewUser = (user) => dispatch(createNewUserAction(user));

  const toggleModal = () => dispatch(toggleModalAction());

  const handleChangeSearch = (event) => {
    dispatch(changeSearchAction(event.target.value));
  };

  const handleResetSearch = () => dispatch(changeSearchAction(""));

  // const users = useSelector(selectUsersData);
  // const search = useSelector(selectUsersSearch);

  const filteredUsers = useSelector(selectFilteredUsers);

  const openToWorkTotal = useSelector(selectOpenToWorkTotal);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={toggleModal}
        >
          Add new user <FiPlus />
        </button>
      </div>

      <SearchInput
        onChangeSearch={handleChangeSearch}
        onResetSearch={handleResetSearch}
      />

      <p>Open to work users: {openToWorkTotal}</p>

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
