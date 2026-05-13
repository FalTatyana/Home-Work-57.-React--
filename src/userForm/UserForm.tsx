const UserForm = () => {
    return (
        <form className="m-3">
            <select className="form-select mb-3 mt-3" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">User</option>
                <option value="2">Editor</option>
                <option value="3">Admin</option>
            </select>
            <div className="input-group mb-3">
                {/* <span className="input-group-text" id="basic-addon1">Name</span> */}
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                {/* <span className="input-group-text" id="basic-addon1">Email</span> */}
                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
                    <label className="form-check-label" htmlFor="radioDefault1">
                        No active
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked/>
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Active
                    </label>
            </div>
        </form>
    )
}

export default UserForm