import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppy' },
    { id: 2, name: 'Craig', username: 'silicon' },
    { id: 3, name: 'Ben', username: 'sphere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <div className='container'>
      <h1>CRUD App with hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <div className='flex-large'>
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
