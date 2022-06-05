import { useEffect, useState } from "react"

const SearchFilms = ({films, handleFilmList, handleFilmChange}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        event.preventDefault()   
      setSearchTerm(event.target.value);  
    }

    const handleButtonClick = (event) => {
        console.dir(event.target.value);
      handleFilmChange(event.target.value)
      handleFilmList(event.target.value)
    }

    useEffect(() => {
      const results = films.filter((film) => 
        film.title.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm,films]);

  return(
      <>
      <form>
          <input className="searchInput" onChange={handleSearchChange} 
          type="search" value={searchTerm} 
          size={32} 
          placeholder="Search by film title..."
          alt="" />
        </form>
         
         <div className="button-div">

          {searchResults.map((film) => 
          <button onClick={handleButtonClick} key={film.id} value={film.id}>{film.title}</button>
          )}
         </div>
      </>
  )
}

export default SearchFilms;