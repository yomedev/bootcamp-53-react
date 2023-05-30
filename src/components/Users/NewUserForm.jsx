import { Component } from "react";

export function getRandomIndex() {
  return Math.floor(Math.random() * 4);
}

const newUsers = [
  {
    id: 11,
    name: "Terry Medhurst",
    email: "atuny0@sohu.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima nemo laborum molestiae aspernatur",
    skills: ["react"],
    isOpenToWork: false,
  },
  {
    id: 12,
    name: "Sheldon Quigley",
    email: "hbingley1@plala.or.jp",
    bio: "Non accusamus exercitationem saepe eos ea odit quibusdam quod cum dignissimos reprehenderit! Deserunt minima beatae voluptatibus praesentium, consectetur pariatur",
    skills: ["angular"],
    isOpenToWork: true,
  },
  {
    id: 13,
    name: "Terrill Hills",
    email: "rshawe2@51.la",
    bio: "Ipsa ducimus fuga totam necessitatibus quasi labore minus quisquam animi incidunt quos magni velit illum. Quo, beatae aspernatur",
    skills: ["vue"],
    isOpenToWork: false,
  },
  {
    id: 14,
    name: "Miles Cummerata",
    email: "yraigatt3@nature.com",
    bio: "Eligendi sapiente neque, possimus inventore repellat perferendis, quia porro beatae qui incidunt nihil voluptatibus libero corporis",
    skills: ["vue", "react"],
    isOpenToWork: true,
  },
];

const getNewUserInfo = () => {
  return {
    name: newUsers[getRandomIndex()].name,
    email: newUsers[getRandomIndex()].email,
    bio: newUsers[getRandomIndex()].bio,
    skills: newUsers[getRandomIndex()].skills,
    isOpenToWork: newUsers[getRandomIndex()].isOpenToWork,
  };
};

const skillsList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

export class NewUserForm extends Component {
  state = getNewUserInfo();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeAvailability = () => {
    this.setState((prevState) => ({ isOpenToWork: !prevState.isOpenToWork }));
  };

  handleSkillsUpdate = (event) => {
    const { name } = event.target;

    this.setState((prevState) => {
      if (prevState.skills.includes(name)) {
        return { skills: prevState.skills.filter((skil) => skil !== name) };
      }

      return { skills: [...prevState.skills, name] };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { onModalClose } = this.props;
    const { name, email, bio, skills, isOpenToWork } = this.state;

    return (
      <form
        action="#"
        autoComplete="off"
        className="w-100"
        onSubmit={this.handleSubmit}
      >
        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>Name</span>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>BIO</span>
            <textarea
              name="bio"
              className="form-control"
              value={bio}
              onChange={this.handleChange}
            />
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
                value={isOpenToWork}
                onChange={this.handleChangeAvailability}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-3">
          <legend className="h6">Skills:</legend>

          <div className="d-flex">
            {skillsList.map((skil) => (
              <div key={skil.value} className="form-check me-5">
                <label className="form-check-label">
                  <span>{skil.label}</span>
                  <input
                    name={skil.value}
                    type="checkbox"
                    className="form-check-input"
                    checked={skills.includes(skil.value)}
                    onChange={this.handleSkillsUpdate}
                  />
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="d-flex flex-column mt-5">
          <button
            type="button"
            className="btn py-2 btn-light w-100 mb-2"
            onClick={onModalClose}
          >
            Cancel
          </button>
          <button type="submit" className="btn py-2 btn-primary w-100">
            Create user
          </button>
        </div>
      </form>
    );
  }
}
