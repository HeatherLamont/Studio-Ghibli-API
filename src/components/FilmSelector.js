const FilmSelector = ({films, handleFilmChange, handleFilmList}) => {

    const filmOptions = films.map((film) => {
      return(
          <option value={film.id} key={film.id}>{film.title}</option>
      )
    })

    const handleChange = (event) => {
      
      handleFilmChange(event.target.value)
      handleFilmList(event.target.value)
    }

    return(
        <div className="custom-select">

        <select onChange={handleChange}>
            <option value="0">Pick a film</option>
            {filmOptions}
        </select>
        </div>
    )
}


export default FilmSelector;