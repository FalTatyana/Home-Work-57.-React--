interface Props {
    onClickForm: (e: React.SubmitEvent<HTMLFormElement>) => void
    onClickCheckbox: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void

    activity: boolean
}

const UserForm = ({ onClickForm, onClickCheckbox, activity: activity }: Props) => {
    return (
        <form onSubmit={onClickForm} className="me-5 w-25 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <span className="fw-bold">Role</span>
            <select name='role' className="form-select mb-3 mt-2" aria-label="Default select example" defaultValue="select">
                <option value="select">Select role</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <span className="fw-bold">Name</span>
            <div className="input-group mb-3">
                <input name='name' type="text" className="form-control mt-2" placeholder="Enter full name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <span className="fw-bold">Email</span>
            <div className="input-group mb-3">
                <input name="email" type="text" className="form-control mt-2" placeholder="Enter email adress" aria-label="Email" aria-describedby="basic-addon1" />
            </div>
            <span className="fw-bold">Activity Status</span>
            <div className="form-check mt-2">
                <input
                    checked={activity}
                    onChange={onClickCheckbox}
                    className="form-check-input"
                    type="checkbox"
                    id="isActive"
                />
                <label className="form-check-label" htmlFor="isActive">
                    User is active
                </label>
            </div>
            <button type="submit" className="btn btn-dark mt-4 w-100"><i className="bi bi-plus-lg"></i> Add user</button>
        </form>
    )
}

export default UserForm