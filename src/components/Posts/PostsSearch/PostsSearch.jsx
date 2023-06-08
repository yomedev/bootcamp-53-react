import { useState } from "react";

import { Button } from "../../Button";
import { useSearchParams } from "react-router-dom";

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [search, setSearch] = useState(query ?? '');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    setSearchParams({query: search});
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
