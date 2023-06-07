import { useState } from "react";

import { Button } from "../../Button";

export const PostsSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    onSubmit(search);
  };

  return (
    <div className="input-group mb-3">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Type to search..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};
