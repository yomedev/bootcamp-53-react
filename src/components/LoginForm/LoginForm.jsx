import { Component, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

// const input = document.getElementById("email");
// input.focus();

const year = new Date().getFullYear();

export const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            ref={inputRef}
            value={form.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            value={form.password}
            name="password"
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="pass">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};

export class LoginForm1 extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    toast.info("Email: " + email);
    toast.info("Password: " + password);

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form
        className="form-signin d-flex align-items-center justify-content-center mt-5"
        onSubmit={this.handleSubmit}
      >
        <div className="d-block" style={{ width: 300, height: "max-content" }}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              value={email}
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mt-4">
            <input
              value={password}
              name="password"
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <label htmlFor="pass">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted">© {year}</p>
        </div>
      </form>
    );
  }
}
