const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="search-image" />
        <input
          type="text"
          placeholder="Search through thousand of movies"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
