import { useState } from 'react'
import './App.css'
import UserForm from './userForm/UserForm'
import UserItem from './userItem/UserItem'
import Users from './userList/Users'

interface User {
  name: string
  email: string
  isActive: boolean
  role: string
  id: number
}

const App = () => {

  const [users, setUsers] = useState<User[]>([
    { name: 'David', email: 'David Guetta', isActive: true, role: 'admin', id: 1 },
    { name: 'David', email: 'David Guetta', isActive: true, role: 'admin', id: 2 },
    { name: 'David', email: 'David Guetta', isActive: true, role: 'admin', id: 3 }
  ]);

  return (
    <div className='d-inline-flex'>
      <UserForm />
      <Users>
        <table className="table table-striped m-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Is Active</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          {users.map((user) => (
            <UserItem
            key={user.id}
            name={user.name}
            email={user.email}
            isActive={user.isActive}
            role={user.role}
          />
          ))}
        </table>
      </Users>
    </div>
  )
}

export default App
