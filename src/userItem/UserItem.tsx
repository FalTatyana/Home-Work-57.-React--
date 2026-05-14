interface Props {
    name: string
    email: string
    activity: boolean
    role: string
}

const UserItem = ({ name, email, activity: activity, role }: Props) => {
    return (
        <tbody>
            <tr>
                <td className='fw-light py-3 px-3'>{name}</td>
                <td className='fw-light py-3 px-3'>{email}</td>
                <td
                    className='fw-light py-3 px-3'
                    style={{ color: activity ? 'green' : 'red' }}
                >
                        {activity ? 'Active' : 'Not active'}
                </td>
                <td className='fw-light py-3 px-3'>{role}</td>
            </tr>
        </tbody>
    )
}

export default UserItem