import { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppy' },
    { id: 2, name: 'Craig', username: 'silicon' },
    { id: 3, name: 'Ben', username: 'sphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    users.id = user.length + 1
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <h1>CRUD App with hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App
