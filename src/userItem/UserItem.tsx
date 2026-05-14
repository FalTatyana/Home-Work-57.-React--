interface Props {
name: string
email: string
activity: boolean
role: string
}

const UserItem = ({name, email, activity: activity, role}: Props) => {
    return (
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{activity ? 'Active' : 'Not active'}</td>
                    <td>{role}</td>
                </tr>
            </tbody>
    )
}

export default UserItem