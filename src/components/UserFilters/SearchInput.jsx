export const SearchInput = ({search, onChangeSearch, onResetSearch}) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input type="text" className="form-control" placeholder="Type to search ..." value={search} onChange={onChangeSearch} />
      <button className="btn btn-outline-secondary" type="button" onClick={onResetSearch}>
        Reset
      </button>
    </div>
  );
};