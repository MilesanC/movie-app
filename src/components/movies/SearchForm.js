import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  return (
    <form className={classes} onSubmit={(e) => e.preventDefault()}>
      <h1>Search Movie</h1>
      <input
        type="text"
        autoComplete="off"
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
};

export default SearchForm;
