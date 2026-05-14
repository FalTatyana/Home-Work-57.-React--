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
    { name: 'Henry Cavill', email: 'Henry Cavill', isActive: true, role: 'admin', id: 1 },
    { name: 'Tom Hardy', email: 'Tom Hardy', isActive: true, role: 'user', id: 2 },
    { name: 'Michele Morrone', email: 'Michele Morrone', isActive: true, role: 'aditor', id: 3 }
  ]);

  const addUser = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const copyUsers = [...users];
    const formData = new FormData(e.currentTarget)
    
    const newUser = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      isActive: true,
      role: formData.get('role') as string,
      id: Date.now()
    }

    console.log(newUser);
    
    copyUsers.push(newUser);
    setUsers(copyUsers)
  };

  const choiceStatus = () => {
  };

  return (
    <div className='d-inline-flex'>
      <UserForm 
      onClickForm={addUser}
      onClickCheckbox={choiceStatus}
      />
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
