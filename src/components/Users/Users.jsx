import { useEffect, useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import usersJson from "../../data/users.json";
import { SearchInput } from "./SearchInput";
import { UsersList } from "./UsersList";
import { Modal } from "../Modal/Modal";
import { NewUserForm } from "./NewUserForm";


const LOCAL_STORAGE_USERS_KEY = "users";

const getLocalUsers = () => {
  const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
  if (localData && localData) {
    return localData;
  }
  return usersJson;
};

export const Users = () => {
  const [users, setUsers] = useState(() => getLocalUsers());
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
  }, [users]);

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleCreateNewUser = (user) => {
    setUsers((prev) => [{ ...user, id: Date.now() }, ...prev]);
    setIsModalOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleResetSearch = () => {
    setSearch("");
  };

  const filteredUsers = useMemo(() => {
    console.log('filter memo');
    return users.filter((user) =>
    user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  }, [search, users])

  // const applyFilter = () => {
  //   console.log('filter');
  //   return users.filter((user) =>
  //   user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  //   );
  // };
  // const filteredUsers = applyFilter()
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

// export class Users1 extends Component {
//   state = {
//     users: usersJson,
//     isModalOpen: false,
//     isAvailable: false,
//     skill: ALL_SKILLS_VALUE,
//     search: "",
//   };

//   componentDidMount() {
//     const localUsers = JSON.parse(
//       localStorage.getItem(LOCAL_STORAGE_USERS_KEY)
//     );
//     if (localUsers) {
//       this.setState({ users: localUsers });
//     }
//   }

//   getSnapshotBeforeUpdate() {
//     return "test";
//   }

//   componentDidUpdate(_, prevState, snapshot) {
//     console.log(snapshot);
//     if (prevState.users.length !== this.state.users.length) {
//       localStorage.setItem(
//         LOCAL_STORAGE_USERS_KEY,
//         JSON.stringify(this.state.users)
//       );
//     }
//   }

//   handleDeleteUser = (id) => {
//     this.setState((prev) => ({
//       users: prev.users.filter((user) => user.id !== id),
//     }));
//   };

//   handleCreateNewUser = (user) => {
//     this.setState((prev) => ({
//       users: [{ ...user, id: Date.now() }, ...prev.users],
//       isModalOpen: false,
//     }));
//   };

//   handleChangeAvailability = () => {
//     this.setState((prev) => ({
//       isAvailable: !prev.isAvailable,
//     }));
//   };

//   handleChangeSkill = (event) => {
//     const { value } = event.target;
//     this.setState({ skill: value });
//   };

//   handleChangeSearch = (event) => {
//     const { value } = event.target;
//     this.setState({ search: value });
//   };

//   handleResetSearch = () => {
//     this.setState({ search: "" });
//   };

//   toggleModal = () => {
//     this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
//   };

//   applyFilters = () => {
//     const { users, search } = this.state;
//     return users.filter((user) =>
//       user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
//     );
//   };

//   render() {
//     const { isAvailable, search, skill, isModalOpen } = this.state;
//     const filteredUsers = this.applyFilters();
//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <AvailabilityFilter
//             onChangeAvailability={this.handleChangeAvailability}
//             isChecked={isAvailable}
//           />
//           <SkillsFilter
//             skillValue={skill}
//             onChangeSkill={this.handleChangeSkill}
//           />

//           <button
//             type="button"
//             className="btn btn-primary btn-lg ms-auto"
//             onClick={this.toggleModal}
//           >
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput
//           search={search}
//           onChangeSearch={this.handleChangeSearch}
//           onResetSearch={this.handleResetSearch}
//         />

//         {isModalOpen && (
//           <Modal onCloseModal={this.toggleModal}>
//             <NewUserForm
//               onSubmit={this.handleCreateNewUser}
//               onModalClose={this.toggleModal}
//             />
//           </Modal>
//         )}
//         <UsersList onDeleteUser={this.handleDeleteUser} users={filteredUsers} />
//       </>
//     );
//   }
// }
