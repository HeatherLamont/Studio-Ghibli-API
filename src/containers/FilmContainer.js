import { useEffect, useState } from "react";
import FilmDetails from "../components/FilmDetails";
// import FilmSelector from "../components/FilmSelector";
import RecentlyViewedFilms from "../components/RecentlyViewedFilms";
import SearchFilms from "../components/SearchFilms";

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState({});
    const [filmList, setFilmList] = useState([])
    const [hidden, setHidden] = useState(true)
    

    const getFilms = () => {
        console.log("getting film data");
      fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data)=>setFilms(data))
      
    }

    const handleFilmChange = (filmId) => {
        // console.log(filmId);
      const foundFilm = films.find((film) => {
        return(
            film.id === (filmId)
        )
      })
      setSelectedFilm(foundFilm)
      setHidden(false)
    }

    const handleFilmList = (filmId) => {
      const foundFilm = films.find((film)=>{
          return(
              film.id === (filmId)
          )
      })
      
     setFilmList(filmList=>[...filmList,foundFilm])
    }

   const handleFilmUpdate = (filmId) => {
    console.log(filmId);
    const foundFilm = films.find((film) => {
      return(
          film.title === (filmId)
      )
    })
    setSelectedFilm(foundFilm)
   }

    useEffect(() => {
      getFilms()
    },[])


  return(
      <>
     
      {/* SUPERCEED BY SEARCH<FilmSelector films={films} handleFilmChange={handleFilmChange} handleFilmList={handleFilmList}/> */}
      <SearchFilms films = {films} handleFilmChange={handleFilmChange} handleFilmList={handleFilmList}/>
      {!hidden ? <FilmDetails selectedFilm={selectedFilm}/> :null}
      {!hidden ? <RecentlyViewedFilms filmList={filmList} handleFilmUpdate={handleFilmUpdate}/>:null}
      </>
  )
}

export default FilmContainer;