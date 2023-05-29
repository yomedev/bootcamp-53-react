
import { UsersItem } from "./UsersItem";

export const UsersList = ({users, onDeleteUser}) => {
  return (
    <div className="mb-5">
      {users.map((user) => (
        <UsersItem onDeleteUser={onDeleteUser} key={user.id} user={user} />
      ))}
    </div>
  );
};
