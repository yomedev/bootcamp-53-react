
import { NotFound } from "../NotFound";
import { UsersItem } from "./UsersItem";

export const UsersList = ({users, onDeleteUser}) => {

  if (!users || !users?.length) {
    return <NotFound>Opsss! No users here</NotFound>
  }

  return (
    <div className="mb-5">
      {users.map((user) => (
        <UsersItem onDeleteUser={onDeleteUser} key={user.id} user={user} />
      ))}
    </div>
  );
};
