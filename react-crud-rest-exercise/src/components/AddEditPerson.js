import React, { useState } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;
    setPerson({ ...person, [name]: value });
  }
  const handleSubmit = (evt) => {
    props.addEditPerson(person);
    evt.preventDefault();  
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              readOnly id="id"
              placeholder={person.id === "" ? "" : person.id}
              />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              value={person.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              value={person.age === "" ? "Enter age" : person.age}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              value={person.email}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              value={person.gender === "" ? "Enter Gender" : person.gender}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(person)}</p>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
