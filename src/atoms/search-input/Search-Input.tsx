import "./Search-Input.scss";
import search from "./ic_Search.png";

const SearchInput = () => {

  return (
    <div className="custom-search">
      <input
        type="text"
        id="main-search-bar"
        className="custom-search--input-field"
        placeholder="Nunca dejes de buscar"
      ></input>
      <img className="custom-search--decorator-img" alt="" src={search}></img>
    </div>
  );
};

export default SearchInput;
