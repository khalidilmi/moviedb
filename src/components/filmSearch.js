import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";

function FilmSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.films.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    dispatch(changeSearchTerm(event.target.value));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/searchedMovie");
  }
  return (
   <form onSubmit={handleSubmit}>
     <label >Search</label>
     <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}
export default FilmSearch;



