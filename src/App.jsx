import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header, Layout } from "./components/Layout";
import { UserFilters } from "./components/UserFilters";
import { UsersList } from "./components/Users/UsersList";
import { Component } from "react";
// import { LoginForm } from "./components/LoginForm";
import usersJson from "./data/users.json";

export class App extends Component {
  state = {
    users: usersJson,
    filters: {
      isAvailable: false,
      skill: "angular",
      search: "",
    },
  };

  handleDeleteUser = (id) => {
    this.setState((prev) => ({
      users: prev.users.filter((user) => user.id !== id),
    }));
  };

  handleChangeAvailability = () => {
    this.setState((prev) => ({
      filters: { ...prev.filters, isAvailable: !prev.filters.isAvailable },
    }));
  };

  handleChangeSkill = (event) => {
    const { value } = event.target;
    this.setState((prev) => ({ filters: { ...prev.filters, skill: value } }));
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState((prev) => ({ filters: { ...prev.filters, search: value } }));
  };

  handleResetSearch = () => {
    this.setState((prev) => ({ filters: { ...prev.filters, search: "" } }));
  };

  applyFilters = () => {
    const { users, filters } = this.state;
    const { search } = filters;
    return users.filter((user) =>
      user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  };

  render() {
    const { filters } = this.state;
    const filteredUsers = this.applyFilters();
    return (
      <Layout>
        <Header title="Hello world!" />
        {/* <LoginForm /> */}
        <UserFilters
          onChangeSkill={this.handleChangeSkill}
          onChangeAvailability={this.handleChangeAvailability}
          filters={filters}
          onChangeSearch={this.handleChangeSearch}
          onResetSearch={this.handleResetSearch}
        />
        <UsersList onDeleteUser={this.handleDeleteUser} users={filteredUsers} />
        <ToastContainer />
      </Layout>
    );
  }
}
// export const App = () => {

//   return (
//     <Layout>
//       <Header title="Hello world!" />
//       {/* <LoginForm /> */}
//       <UserFilters />
//       <UsersList />
//       <ToastContainer />
//     </Layout>
//   );
// };
