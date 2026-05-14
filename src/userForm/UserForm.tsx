interface Props {
    onClickForm: (e: React.SubmitEvent<HTMLFormElement>) => void
    onClickCheckbox: () => void
}

const UserForm = ({onClickForm, onClickCheckbox}: Props) => {
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
                <input onClick={onClickCheckbox} className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
                    <label className="form-check-label" htmlFor="radioDefault1">
                        No active
                    </label>
            </div>
            <div className="form-check">
                <input onClick={onClickCheckbox} className="form-check-input" type="radio" name="radioDefault" id="radioDefault2"/>
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Active
                    </label>
            </div>
            <button type="submit" className="btn btn-success mt-3">Success</button>
        </form>
    )
}

export default UserForm