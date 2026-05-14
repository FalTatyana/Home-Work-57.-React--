interface Props {
    onClickForm: (e: React.SubmitEvent<HTMLFormElement>) => void
    onClickCheckbox: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void

    activity: boolean
}

const UserForm = ({ onClickForm, onClickCheckbox, activity: activity }: Props) => {
    return (
        <form onSubmit={onClickForm} className="m-3">
            <select name='role' className="form-select mb-3 mt-3" aria-label="Default select example" defaultValue="select">
                <option value="select">Open this select menu</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <div className="input-group mb-3">
                <input name='name' type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
            </div>

            <div className="form-check">
                <input
                    checked={activity}
                    onChange={onClickCheckbox}
                    className="form-check-input"
                    type="checkbox"
                    id="isActive"
                />
                <label className="form-check-label" htmlFor="isActive">
                    Active
                </label>
            </div>
            <button type="submit" className="btn btn-success mt-3">Success</button>
        </form>
    )
}

export default UserForm