import usersJson from '../data/users.json'

export const initialState = {
  users: {
    items: usersJson,
    search: '',
    isModalOpen: false
  }
}