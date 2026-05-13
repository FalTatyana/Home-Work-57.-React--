interface Props {
name: string
email: string
isActive: boolean
role: string
}

const UserItem = ({name, email, isActive, role}: Props) => {
    return (
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{isActive}</td>
                    <td>{role}</td>
                </tr>
            </tbody>
    )
}

export default UserItem