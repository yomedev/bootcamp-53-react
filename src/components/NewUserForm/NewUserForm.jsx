const skillsList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

export const NewUserForm = () => {
  return (
    <form action="#" autoComplete="off" className="w-100">
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input type="text" name="name" className="form-control" />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input type="email" name="email" className="form-control" />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea name="bio" className="form-control" />
        </label>
      </div>

      <fieldset className="mt-3">
        <legend className="h6">Availability:</legend>

        <div className="form-check">
          <label className="form-check-label">
            <span>Is open to work</span>
            <input
              className="form-check-input"
              type="checkbox"
              name="isOpenToWork"
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-3">
        <legend className="h6">Skils:</legend>

        <div className="d-flex">
          {skillsList.map((skill) => (
            <div key={skill.value} className="form-check me-5">
              <label className="form-check-label">
                <span>{skill.label}</span>
                <input
                  name={skill.value}
                  type="checkbox"
                  className="form-check-input"
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="d-flex flex-column mt-5">
        <button type="button" className="btn py-2 btn-light w-100 mb-2">
          Cancel
        </button>
        <button type="submit" className="btn py-2 btn-primary w-100">
          Create user
        </button>
      </div>
    </form>
  );
};
