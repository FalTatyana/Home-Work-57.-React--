import { useState } from 'react'
import UserForm from './userForm/UserForm'
import UserItem from './userItem/UserItem'
import Users from './userList/Users'
import { ToastContainer, toast } from 'react-toastify'

interface User {
  name: string
  email: string
  activity: boolean
  role: string
  id: number
}

const App = () => {

  const [users, setUsers] = useState<User[]>([
    { name: 'Henry Cavill', email: 'henry-cavill@gmail.com', activity: true, role: 'admin', id: 1 },
    { name: 'Tom Hardy', email: 'tom-hardy@gmail.com', activity: true, role: 'user', id: 2 },
    { name: 'Michele Morrone', email: 'michele-morrone@gmail.com', activity: true, role: 'editor', id: 3 }
  ]);

  const [isActive, setIsActive] = useState(false);

  const addUser = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const copyUsers = [...users];
    const formData = new FormData(e.currentTarget)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const role = formData.get('role') as string

    const newUser = {
      name: name,
      email: email,
      activity: isActive,
      role: role,
      id: Date.now()
    }

    if (!name.trim() || !email.trim() || role === 'select') {
      toast.error('Fill all fields');
      return;
    };

    e.currentTarget.reset()
    copyUsers.push(newUser);
    setUsers(copyUsers);
  };

  const choiceStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked)
  }

  return (
    <div className='d-flex justify-content-center m-3'>
      <UserForm
        onClickForm={addUser}
        onClickCheckbox={choiceStatus}
        activity={isActive}
      />
      <Users>
        <table className="table table-hover shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <thead className="table-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Activity</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          {users.map((user) => (
            <UserItem
              key={user.id}
              name={user.name}
              email={user.email}
              activity={user.activity}
              role={user.role}
            />
          ))}
        </table>
      </Users>
      <ToastContainer />
    </div>
  )
}

export default App
